import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight } from "lucide-react";
import * as THREE from "three";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js";
import { ShaderPass } from "three/addons/postprocessing/ShaderPass.js";
import { GammaCorrectionShader } from "three/addons/shaders/GammaCorrectionShader.js";
import { CopyShader } from "three/addons/shaders/CopyShader.js";

const CONFIG = {
  bgColor: "#1a0418",
  flameColor: "#ff2d6b",
  flameColor2: "#ffd36b",
  flameAmt: 0.2,
  atmoColor: "#ff7ab0",
  atmoCount: 300,
  atmoSize: 24,
  atmoSpeed: 1.0,
  coreColor: "#6a0a2a",
  midColor: "#ff2d6b",
  rimColor: "#ffd36b",
  opacity: 2,
  pointSize: 80,
  brightness: 1.6,
  spin: 0.03,
  blowUp: 0,
  repelRadius: 1.4,
  repelStrength: 4,
  scrollDive: 3,
  scrollGrow: 0.5,
  scrollSpin: 0.6,
  parallax: 0.7,
} as const;

const LAYERS = { NONE: 0, TORUS_SCENE: 1, BLOOM_SCENE: 2, ENTIRE_SCENE: 3 } as const;

function hexToVec3(hex: string) {
  const n = parseInt(hex.slice(1), 16);
  return new THREE.Vector3(((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255);
}

function detectSoftwareWebGL(): boolean {
  try {
    const probe = document.createElement("canvas");
    const gl =
      (probe.getContext("webgl2") as WebGL2RenderingContext | null) ||
      (probe.getContext("webgl") as WebGLRenderingContext | null);
    if (!gl) return true;
    const ext = gl.getExtension("WEBGL_debug_renderer_info");
    const param = ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER;
    const gpu = String(gl.getParameter(param) ?? "");
    gl.getExtension("WEBGL_lose_context")?.loseContext();
    return /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
  } catch {
    return true;
  }
}

export function StormIntro() {
  const wrapperRef = useRef<HTMLElement>(null);
  const canvasHostRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const ctaRowRef = useRef<HTMLDivElement>(null);
  const scrollHintRef = useRef<HTMLDivElement>(null);
  const [webglReady, setWebglReady] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  const scrollToSite = () => {
    const target = document.getElementById("site-content");
    if (target) {
      target.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" });
      return;
    }
    const wrapper = wrapperRef.current;
    if (wrapper) {
      window.scrollTo({
        top: wrapper.offsetTop + wrapper.offsetHeight,
        behavior: reducedMotion ? "auto" : "smooth",
      });
    }
  };

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setReducedMotion(true);
      setWebglReady(false);
      return;
    }

    const wrapper = wrapperRef.current;
    const host = canvasHostRef.current;
    if (!wrapper || !host) return;

    const isSoftwareGl = detectSoftwareWebGL();
    let disposed = false;
    let rafId = 0;
    let timeoutId = 0;
    let isVisible = true;

    let renderer: THREE.WebGLRenderer | null = null;
    let torusComposer: EffectComposer | null = null;
    let bloomComposer: EffectComposer | null = null;
    let finalComposer: EffectComposer | null = null;
    let torusBloomPass: UnrealBloomPass | null = null;
    let bloomPass: UnrealBloomPass | null = null;
    let stormGeo: THREE.BufferGeometry | null = null;
    let stormMat: THREE.ShaderMaterial | null = null;
    let atmoGeo: THREE.BufferGeometry | null = null;
    let atmoMat: THREE.ShaderMaterial | null = null;
    let emptyHaloTex: THREE.DataTexture | null = null;

    try {
      const getSize = () => ({
        w: Math.max(1, host.clientWidth || window.innerWidth),
        h: Math.max(1, host.clientHeight || window.innerHeight),
      });
      const { w: initW, h: initH } = getSize();
      const dpr = isSoftwareGl ? 1 : Math.min(window.devicePixelRatio || 1, 2);

      renderer = new THREE.WebGLRenderer({
        antialias: !isSoftwareGl,
        powerPreference: "high-performance",
        alpha: false,
      });
      renderer.setPixelRatio(dpr);
      renderer.setSize(initW, initH);
      renderer.shadowMap.enabled = !isSoftwareGl;
      renderer.shadowMap.type = THREE.VSMShadowMap;
      renderer.domElement.style.display = "block";
      renderer.domElement.style.width = "100%";
      renderer.domElement.style.height = "100%";

      host.innerHTML = "";
      host.appendChild(renderer.domElement);

      const handleContextLost = (e: Event) => {
        e.preventDefault();
        disposed = true;
        cancelAnimationFrame(rafId);
        clearTimeout(timeoutId);
        setWebglReady(false);
      };
      renderer.domElement.addEventListener("webglcontextlost", handleContextLost, false);

      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0x000000);
      scene.fog = new THREE.Fog(0x000000, 0, 15);

      const camera = new THREE.PerspectiveCamera(45, initW / initH, 0.1, 80);
      camera.position.set(0, 0, 7);
      camera.layers.enable(LAYERS.TORUS_SCENE);
      camera.layers.enable(LAYERS.BLOOM_SCENE);
      camera.layers.enable(LAYERS.ENTIRE_SCENE);
      scene.add(camera);

      const renderScene = new RenderPass(scene, camera);

      torusComposer = new EffectComposer(renderer);
      torusComposer.renderToScreen = false;
      torusComposer.setPixelRatio(dpr);
      torusComposer.setSize(initW, initH);
      torusComposer.addPass(renderScene);
      torusComposer.addPass(new ShaderPass(GammaCorrectionShader));
      torusBloomPass = new UnrealBloomPass(new THREE.Vector2(initW, initH), 0.22, 0.2, 0);
      torusComposer.addPass(torusBloomPass);
      torusComposer.addPass(new ShaderPass(CopyShader));

      bloomComposer = new EffectComposer(renderer);
      bloomComposer.renderToScreen = false;
      bloomComposer.setPixelRatio(dpr);
      bloomComposer.setSize(initW, initH);
      bloomComposer.addPass(renderScene);
      bloomPass = new UnrealBloomPass(new THREE.Vector2(initW, initH), 0.4, 0.55, 0);
      bloomComposer.addPass(bloomPass);
      bloomComposer.addPass(new ShaderPass(GammaCorrectionShader));

      emptyHaloTex = new THREE.DataTexture(new Uint8Array([0, 0, 0, 0]), 1, 1);
      emptyHaloTex.needsUpdate = true;

      const FinalPass = {
        uniforms: {
          iTime: { value: 0 },
          tDiffuse: { value: null },
          torusTexture: { value: null },
          bloomTexture: { value: null },
          haloTexture: { value: emptyHaloTex },
          uBg: { value: hexToVec3(CONFIG.bgColor) },
          uFlameA: { value: hexToVec3(CONFIG.flameColor) },
          uFlameB: { value: hexToVec3(CONFIG.flameColor2) },
          uFlameAmt: { value: CONFIG.flameAmt },
        },
        vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position, 1.0); }`,
        fragmentShader: `
          uniform float iTime;
          uniform sampler2D tDiffuse;
          uniform sampler2D bloomTexture;
          uniform sampler2D torusTexture;
          uniform sampler2D haloTexture;
          uniform vec3 uBg;
          uniform vec3 uFlameA;
          uniform vec3 uFlameB;
          uniform float uFlameAmt;
          varying vec2 vUv;

          float hash31(vec3 p) {
            p = fract(p * 0.1031);
            p += dot(p, p.yzx + 33.33);
            return fract((p.x + p.y) * p.z);
          }

          float noise3d(vec3 p) {
            vec3 i = floor(p);
            vec3 f = fract(p);
            f = f * f * (3.0 - 2.0 * f);
            float n000 = hash31(i + vec3(0.0, 0.0, 0.0));
            float n100 = hash31(i + vec3(1.0, 0.0, 0.0));
            float n010 = hash31(i + vec3(0.0, 1.0, 0.0));
            float n110 = hash31(i + vec3(1.0, 1.0, 0.0));
            float n001 = hash31(i + vec3(0.0, 0.0, 1.0));
            float n101 = hash31(i + vec3(1.0, 0.0, 1.0));
            float n011 = hash31(i + vec3(0.0, 1.0, 1.0));
            float n111 = hash31(i + vec3(1.0, 1.0, 1.0));
            float nx00 = mix(n000, n100, f.x);
            float nx10 = mix(n010, n110, f.x);
            float nx01 = mix(n001, n101, f.x);
            float nx11 = mix(n011, n111, f.x);
            float nxy0 = mix(nx00, nx10, f.y);
            float nxy1 = mix(nx01, nx11, f.y);
            return mix(nxy0, nxy1, f.z);
          }

          float warp3d(vec3 p) {
            float q = noise3d(p + vec3(0.0, iTime * 0.08, iTime * 0.05));
            float r = noise3d(p * 1.9 + vec3(q * 1.4, -iTime * 0.1, 1.7));
            return noise3d(p * 2.4 + vec3(r * 1.3, q * 0.9, iTime * 0.12));
          }

          void main() {
            vec4 base = texture2D(tDiffuse, vUv);
            vec4 bloom = texture2D(bloomTexture, vUv);
            vec4 torus = texture2D(torusTexture, vUv);
            vec4 halo = texture2D(haloTexture, vUv);

            vec2 centered = vUv - 0.5;
            float cornerMask = smoothstep(0.22, 0.78, length(centered));

            float nA = warp3d(vec3(vUv * 2.6, iTime * 0.09));
            float nB = warp3d(vec3(vUv * 3.4 + 4.2, -iTime * 0.07));

            float topRight = smoothstep(0.95, 0.1, length(vUv - vec2(1.0, 1.0)));
            float bottomLeft = smoothstep(0.95, 0.1, length(vUv - vec2(0.0, 0.0)));
            float topLeft = smoothstep(0.9, 0.15, length(vUv - vec2(0.0, 1.0))) * 0.55;
            float bottomRight = smoothstep(0.9, 0.15, length(vUv - vec2(1.0, 0.0))) * 0.55;

            float cornerGlow = (topRight + bottomLeft + topLeft + bottomRight) * cornerMask;
            vec3 flame = mix(uFlameA, uFlameB, smoothstep(0.25, 0.8, nB)) * (0.45 + 0.85 * nA) * cornerGlow;

            vec3 bg = uBg + flame * uFlameAmt;
            vec3 col = bg + base.rgb + bloom.rgb + torus.rgb + halo.rgb;
            gl_FragColor = vec4(col, 1.0);
          }
        `,
      };

      finalComposer = new EffectComposer(renderer);
      finalComposer.setPixelRatio(dpr);
      finalComposer.setSize(initW, initH);
      finalComposer.addPass(renderScene);
      const finalPass = new ShaderPass(FinalPass);
      finalPass.uniforms.bloomTexture.value = bloomComposer.readBuffer.texture;
      finalPass.uniforms.torusTexture.value = torusComposer.readBuffer.texture;
      finalComposer.addPass(finalPass);

      // Storm particle sphere (50,000 additive points)
      const count = 50000;
      const radius = 2.5;
      const positions = new Float32Array(count * 3);
      const scales = new Float32Array(count);
      const noises = new Float32Array(count);
      const radialPush = new Float32Array(count);
      const mixv = new Float32Array(count);

      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        let u: number;
        let v: number;
        let s: number;
        do {
          u = Math.random() * 2 - 1;
          v = Math.random() * 2 - 1;
          s = u * u + v * v;
        } while (s >= 1 || s === 0);
        const factor = 2 * Math.sqrt(1 - s);
        const dx = u * factor;
        const dy = v * factor;
        const dz = 1 - 2 * s;
        const rN = Math.pow(Math.random(), 0.4);
        const r = radius * (0.55 + rN * 0.45);
        positions[i3] = dx * r;
        positions[i3 + 1] = dy * r;
        positions[i3 + 2] = dz * r;
        mixv[i] = rN;
        scales[i] = 0.45 + Math.random() * 0.8;
        noises[i] = Math.random();
        radialPush[i] = 0.4 + rN * 1.1;
      }

      stormGeo = new THREE.BufferGeometry();
      stormGeo.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
      stormGeo.setAttribute("aScale", new THREE.Float32BufferAttribute(scales, 1));
      stormGeo.setAttribute("aNoise", new THREE.Float32BufferAttribute(noises, 1));
      stormGeo.setAttribute("aRadialPush", new THREE.Float32BufferAttribute(radialPush, 1));
      stormGeo.setAttribute("aMix", new THREE.Float32BufferAttribute(mixv, 1));

      const uniforms = {
        uTime: { value: 0 },
        uSize: { value: CONFIG.pointSize },
        uOpacity: { value: 0 },
        uBlowUp: { value: CONFIG.blowUp as number },
        uCursor: { value: new THREE.Vector3() },
        uRepelRadius: { value: CONFIG.repelRadius },
        uRepelStrength: { value: CONFIG.repelStrength },
        uActivity: { value: 0 },
        uCore: { value: hexToVec3(CONFIG.coreColor) },
        uMid: { value: hexToVec3(CONFIG.midColor) },
        uRim: { value: hexToVec3(CONFIG.rimColor) },
        uBrightness: { value: CONFIG.brightness },
      };

      stormMat = new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        uniforms,
        vertexShader: `
uniform float uTime; uniform float uSize; uniform float uBlowUp;
uniform vec3 uCursor; uniform float uRepelRadius; uniform float uRepelStrength; uniform float uActivity;
uniform vec3 uCore; uniform vec3 uMid; uniform vec3 uRim;
attribute float aScale; attribute float aNoise; attribute float aRadialPush; attribute float aMix;
varying vec3 vColor; varying float vBlowUp;
void main() {
  vec3 pos = position;

  // Per-particle in/out wobble.
  float t = uTime * 1.4 + aNoise * 6.2831;
  float wobble = sin(t) * 0.1 * aRadialPush;
  pos *= 1.0 + wobble;

  // Slow secondary swirl on xz.
  float swirlAngle = uTime * 0.05 + aNoise * 6.2831;
  mat2 swirl = mat2(cos(swirlAngle), -sin(swirlAngle), sin(swirlAngle), cos(swirlAngle));
  pos.xz = swirl * pos.xz;

  // Blow-up — radial explosion with a squared falloff.
  vec3 outward = normalize(pos + vec3(0.0001));
  float blow = uBlowUp * uBlowUp;
  pos += outward * blow * (10.0 + aNoise * 18.0) * aRadialPush;

  vec4 modelPosition = modelMatrix * vec4(pos, 1.0);

  vec3 toParticle = modelPosition.xyz - uCursor;
  float dist = length(toParticle);
  float falloff = smoothstep(uRepelRadius, 0.0, dist);
  modelPosition.xyz += normalize(toParticle + vec3(0.0001)) * falloff * uRepelStrength * uActivity;

  vec4 viewPosition = viewMatrix * modelPosition;
  gl_Position = projectionMatrix * viewPosition;
  gl_PointSize = uSize * aScale;
  gl_PointSize *= (1.0 / -viewPosition.z);

  // Three-stop radial gradient (aMix = biased radius 0..1).
  float t1 = smoothstep(0.25, 0.85, aMix);
  vec3 mix1 = mix(uCore, uMid, t1);
  float t2 = clamp((aMix - 0.7) * 3.0, 0.0, 1.0);
  vColor = mix(mix1, uRim, t2);
  vBlowUp = uBlowUp;
}
        `,
        fragmentShader: `
uniform float uOpacity; uniform float uBrightness;
varying vec3 vColor; varying float vBlowUp;
void main() {
  vec2 uv = gl_PointCoord - 0.5;
  float d = length(uv);
  if (d > 0.5) discard;
  float strength = pow(1.0 - d * 2.0, 4.5);
  vec3 color = mix(vec3(0.0), vColor, strength);
  float blowFade = 1.0 - smoothstep(0.15, 1.0, vBlowUp);
  gl_FragColor = vec4(color * uBrightness, strength * uOpacity * blowFade);
}
        `,
      });

      const stormPoints = new THREE.Points(stormGeo, stormMat);
      stormPoints.layers.enable(LAYERS.ENTIRE_SCENE);

      const stormGroup = new THREE.Group();
      stormGroup.add(stormPoints);
      scene.add(stormGroup);

      // Ambient motes
      const N = CONFIG.atmoCount;
      const atmoPos = new Float32Array(N * 3);
      const atmoScale = new Float32Array(N);
      const atmoSeed = new Float32Array(N);
      for (let i = 0; i < N; i++) {
        const i3 = i * 3;
        atmoPos[i3] = (Math.random() - 0.5) * 18;
        atmoPos[i3 + 1] = (Math.random() - 0.5) * 12;
        atmoPos[i3 + 2] = -2 - Math.random() * 14;
        atmoScale[i] = 0.35 + Math.random() * 0.9;
        atmoSeed[i] = Math.random();
      }

      atmoGeo = new THREE.BufferGeometry();
      atmoGeo.setAttribute("position", new THREE.Float32BufferAttribute(atmoPos, 3));
      atmoGeo.setAttribute("aScale", new THREE.Float32BufferAttribute(atmoScale, 1));
      atmoGeo.setAttribute("aSeed", new THREE.Float32BufferAttribute(atmoSeed, 1));

      atmoMat = new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        depthTest: false,
        blending: THREE.AdditiveBlending,
        uniforms: {
          uTime: { value: 0 },
          uSize: { value: CONFIG.atmoSize },
          uColor: { value: hexToVec3(CONFIG.atmoColor) },
          uRes: { value: new THREE.Vector2(initW * dpr, initH * dpr) },
        },
        vertexShader: `
          uniform float uTime;
          uniform float uSize;
          uniform vec2 uRes;
          attribute float aScale;
          attribute float aSeed;
          varying float vAlpha;
          void main() {
            vec3 pos = position;
            float phase = aSeed * 6.2831853;
            float t = uTime * 0.08;
            pos.x += sin(t * (0.7 + aSeed * 0.5) + phase) * 0.65;
            pos.y += cos(t * (0.6 + aSeed * 0.4) + phase * 1.3) * 0.55;
            pos.z += sin(t * 0.45 + phase * 0.7) * 0.5;

            vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
            gl_Position = projectionMatrix * mvPosition;
            gl_PointSize = uSize * aScale * (uRes.y / 1080.0) * (1.0 / max(1.0, -mvPosition.z * 0.25));
            vAlpha = 0.25 + 0.55 * (0.5 + 0.5 * sin(uTime * 0.35 + phase * 2.0));
          }
        `,
        fragmentShader: `
          uniform vec3 uColor;
          varying float vAlpha;
          void main() {
            vec2 uv = gl_PointCoord - 0.5;
            float d = length(uv);
            if (d > 0.5) discard;
            float glow = pow(1.0 - d * 2.0, 3.0);
            gl_FragColor = vec4(uColor * glow, glow * vAlpha);
          }
        `,
      });

      const atmoPoints = new THREE.Points(atmoGeo, atmoMat);
      atmoPoints.frustumCulled = false;
      atmoPoints.layers.enable(LAYERS.ENTIRE_SCENE);
      atmoPoints.position.copy(camera.position);
      scene.add(atmoPoints);

      if (!isSoftwareGl) {
        renderer.compile(scene, camera);
      }

      // Reusable math helpers (zero per-frame GC)
      const POINTER = {
        target: new THREE.Vector2(0, 0),
        mid: new THREE.Vector2(0, 0),
        cur: new THREE.Vector2(0, 0),
        activeTarget: 0,
        active: 0,
      };
      const rayVec = new THREE.Vector3();
      const rayDir = new THREE.Vector3();

      const updatePointer = () => {
        rayVec.set(POINTER.cur.x, POINTER.cur.y, 0.5).unproject(camera);
        rayDir.copy(rayVec).sub(camera.position).normalize();
        if (Math.abs(rayDir.z) > 1e-5) {
          const dist = -camera.position.z / rayDir.z;
          uniforms.uCursor.value.copy(camera.position).addScaledVector(rayDir, dist);
        }
      };

      const onPointerMove = (e: PointerEvent) => {
        const rect = host.getBoundingClientRect();
        if (rect.width <= 0 || rect.height <= 0) return;
        POINTER.target.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        POINTER.target.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
        POINTER.activeTarget = 1;
      };

      const onPointerLeave = () => {
        POINTER.activeTarget = 0;
      };

      window.addEventListener("pointermove", onPointerMove, { passive: true });
      document.addEventListener("mouseleave", onPointerLeave, { passive: true });

      let scrollTarget = 0;
      let scrollMid = 0;
      let scrollCur = 0;

      const updateScroll = () => {
        const rect = wrapper.getBoundingClientRect();
        const travel = Math.max(1, wrapper.offsetHeight - host.clientHeight);
        scrollTarget = THREE.MathUtils.clamp(-rect.top / travel, 0, 1);

        if (scrollHintRef.current) {
          scrollHintRef.current.style.opacity = scrollTarget > 0.06 ? "0" : "1";
        }
      };

      window.addEventListener("scroll", updateScroll, { passive: true });
      updateScroll();

      const onResize = () => {
        const { w, h } = getSize();
        const nextDpr = isSoftwareGl ? 1 : Math.min(window.devicePixelRatio || 1, 2);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();

        renderer?.setPixelRatio(nextDpr);
        renderer?.setSize(w, h);

        torusComposer?.setPixelRatio(nextDpr);
        torusComposer?.setSize(w, h);
        bloomComposer?.setPixelRatio(nextDpr);
        bloomComposer?.setSize(w, h);
        finalComposer?.setPixelRatio(nextDpr);
        finalComposer?.setSize(w, h);

        atmoMat?.uniforms.uRes.value.set(w * nextDpr, h * nextDpr);
        updateScroll();
      };

      const resizeObserver = new ResizeObserver(onResize);
      resizeObserver.observe(host);
      window.addEventListener("resize", onResize);

      const clock = new THREE.Clock();
      let elapsedTime = 0;

      atmoPoints.onBeforeRender = () => {
        if (!atmoMat) return;
        atmoMat.uniforms.uTime.value = elapsedTime * CONFIG.atmoSpeed * 8.0;
        atmoPoints.position.copy(camera.position);
        finalPass.uniforms.iTime.value = elapsedTime;
      };

      const afterDraw = (cb: () => void) => {
        if (disposed || !renderer) return;
        const gl = renderer.getContext() as WebGL2RenderingContext;
        if (typeof gl.fenceSync === "function") {
          const sync = gl.fenceSync(gl.SYNC_GPU_COMMANDS_COMPLETE, 0);
          gl.flush();
          const poll = () => {
            if (disposed) {
              if (sync) gl.deleteSync(sync);
              return;
            }
            const state = sync && gl.getSyncParameter(sync, gl.SYNC_STATUS);
            if (state === gl.UNSIGNALED) {
              timeoutId = window.setTimeout(poll, 5);
            } else {
              if (sync) gl.deleteSync(sync);
              timeoutId = window.setTimeout(cb, 80);
            }
          };
          timeoutId = window.setTimeout(poll, 5);
        } else {
          timeoutId = window.setTimeout(cb, 80);
        }
      };

      const tick = () => {
        if (disposed || !isVisible || document.hidden) return;
        if (!renderer || !torusComposer || !bloomComposer || !finalComposer) return;

        const dt = Math.min(clock.getDelta(), 0.05);
        elapsedTime += dt;

        // Smooth fade-in to CONFIG.opacity
        const appearEase = 1 - Math.exp(-1.8 * dt);
        uniforms.uOpacity.value += (CONFIG.opacity - uniforms.uOpacity.value) * appearEase;

        // Double-damped pointer smoothing
        const pEase = 1 - Math.exp(-8.5 * dt);
        POINTER.mid.lerp(POINTER.target, pEase);
        POINTER.cur.lerp(POINTER.mid, pEase);
        POINTER.active += (POINTER.activeTarget - POINTER.active) * (1 - Math.exp(-6.0 * dt));
        uniforms.uActivity.value = POINTER.active;

        // Double-damped scroll smoothing
        const sEase = 1 - Math.exp(-7.0 * dt);
        scrollMid += (scrollTarget - scrollMid) * sEase;
        scrollCur += (scrollMid - scrollCur) * sEase;

        // Camera dive + cursor parallax
        camera.position.x = POINTER.cur.x * CONFIG.parallax;
        camera.position.y = POINTER.cur.y * CONFIG.parallax;
        camera.position.z = 7 - scrollCur * CONFIG.scrollDive;
        camera.lookAt(0, 0, 0);

        // Scroll-driven growth, swirl acceleration & soft late-scroll blow-up bloom
        const orbScale = 1 + scrollCur * CONFIG.scrollGrow;
        stormGroup.scale.setScalar(orbScale);
        stormGroup.rotation.y += (CONFIG.spin + scrollCur * CONFIG.scrollSpin) * dt;
        stormGroup.rotation.x = Math.sin(elapsedTime * 0.15) * 0.08;

        const diveOut = THREE.MathUtils.smoothstep(scrollCur, 0.72, 1.0);
        uniforms.uBlowUp.value = diveOut * 0.45;

        if (contentRef.current) {
          const textOpacity = Math.max(0, 1 - scrollCur * 1.9);
          const textShift = -scrollCur * 28;
          contentRef.current.style.opacity = String(textOpacity);
          contentRef.current.style.transform = `translate3d(0, ${textShift}px, 0)`;
          if (ctaRowRef.current) {
            ctaRowRef.current.style.pointerEvents = textOpacity < 0.2 ? "none" : "auto";
          }
        }

        uniforms.uTime.value = elapsedTime;
        updatePointer();

        camera.layers.set(LAYERS.TORUS_SCENE);
        torusComposer.render();
        finalPass.uniforms.torusTexture.value = torusComposer.readBuffer.texture;

        camera.layers.set(LAYERS.BLOOM_SCENE);
        bloomComposer.render();
        finalPass.uniforms.bloomTexture.value = bloomComposer.readBuffer.texture;

        camera.layers.set(LAYERS.ENTIRE_SCENE);
        finalComposer.render();

        if (isSoftwareGl) {
          afterDraw(tick);
        } else {
          rafId = requestAnimationFrame(tick);
        }
      };

      const startLoop = () => {
        if (disposed || !isVisible || document.hidden) return;
        cancelAnimationFrame(rafId);
        clearTimeout(timeoutId);
        clock.getDelta();
        rafId = requestAnimationFrame(tick);
      };

      const intersectionObserver = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          const nextVisible = Boolean(entry?.isIntersecting);
          if (nextVisible === isVisible) return;
          isVisible = nextVisible;
          if (isVisible && !document.hidden) {
            startLoop();
          } else {
            cancelAnimationFrame(rafId);
            clearTimeout(timeoutId);
          }
        },
        { threshold: 0.01 }
      );
      intersectionObserver.observe(wrapper);

      const onVisibilityChange = () => {
        if (document.hidden) {
          cancelAnimationFrame(rafId);
          clearTimeout(timeoutId);
        } else if (isVisible) {
          startLoop();
        }
      };
      document.addEventListener("visibilitychange", onVisibilityChange);

      startLoop();

      return () => {
        disposed = true;
        cancelAnimationFrame(rafId);
        clearTimeout(timeoutId);
        intersectionObserver.disconnect();
        resizeObserver.disconnect();
        window.removeEventListener("resize", onResize);
        window.removeEventListener("scroll", updateScroll);
        window.removeEventListener("pointermove", onPointerMove);
        document.removeEventListener("mouseleave", onPointerLeave);
        document.removeEventListener("visibilitychange", onVisibilityChange);
        renderer?.domElement.removeEventListener("webglcontextlost", handleContextLost);

        stormGeo?.dispose();
        stormMat?.dispose();
        atmoGeo?.dispose();
        atmoMat?.dispose();
        emptyHaloTex?.dispose();
        torusBloomPass?.dispose();
        bloomPass?.dispose();
        torusComposer?.dispose();
        bloomComposer?.dispose();
        finalComposer?.dispose();
        renderer?.dispose();
        if (host) {
          host.innerHTML = "";
        }
      };
    } catch {
      setWebglReady(false);
    }
  }, []);

  return (
    <section
      ref={wrapperRef}
      id="storm-intro"
      aria-label="AstroFree Cosmic Introduction"
      className={
        reducedMotion
          ? "relative w-full min-h-[82svh] bg-[#1a0418]"
          : "relative w-full h-[155svh] min-h-[780px] bg-[#1a0418]"
      }
    >
      <div
        className={
          reducedMotion
            ? "relative w-full min-h-[82svh] overflow-hidden"
            : "sticky top-0 w-full h-[100svh] overflow-hidden"
        }
      >
        {/* Atmospheric fallback / base layer */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 48%, rgba(255,45,107,0.22) 0%, rgba(106,10,42,0.28) 32%, #1a0418 72%)",
          }}
        />

        {/* Isolated Three.js WebGL Mount */}
        {webglReady && (
          <div ref={canvasHostRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />
        )}

        {/* Seamless transition fade into main crimson burgundy site background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 sm:h-44"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(26, 4, 24, 0.55) 55%, var(--background) 100%)",
          }}
        />

        {/* Centered AstroFree Intro Overlay (pointer-transparent so cursor interacts with Storm orb) */}
        <div
          ref={contentRef}
          className="pointer-events-none relative z-20 flex h-full w-full flex-col items-center justify-center px-4 pt-20 pb-20 text-center"
        >
          <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.26em] text-[#ead9c3] drop-shadow-[0_2px_10px_rgba(12,2,8,0.9)]">
            Ancient Wisdom · Vedic Numerology · Compassionate AI
          </p>

          <p className="mt-4 font-display text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight leading-none drop-shadow-[0_6px_28px_rgba(15,2,10,0.85)]">
            <span className="chrome-text">Astro</span>
            <span className="ml-1 font-light tracking-wide text-[#faf2e4]">Free</span>
          </p>

          <div
            aria-hidden="true"
            className="mt-4 h-[1.5px] w-28 sm:w-36 bg-gradient-to-r from-transparent via-[#ffd36b]/85 to-transparent"
          />

          <p className="mt-4 max-w-md text-sm sm:text-base text-[#f5e7d0]/95 leading-relaxed drop-shadow-[0_2px_14px_rgba(12,2,8,0.95)] [text-wrap:balance]">
            Enter the sanctuary for free 78-card AI tarot readings and Vedic numerology insights.
          </p>

          <div
            ref={ctaRowRef}
            className="pointer-events-auto mt-7 flex flex-col sm:flex-row items-center justify-center gap-3.5"
          >
            <button
              type="button"
              onClick={scrollToSite}
              className="liquid-chrome-btn inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#24060e] cursor-pointer"
            >
              <span>Enter Sanctuary</span>
              <ArrowDown className="h-4 w-4" />
            </button>

            <Link
              to="/reading"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#f5e7d0]/35 bg-[#2d0713]/85 px-6 py-3 text-xs sm:text-sm font-semibold text-[#faf2e4] transition-colors hover:border-[#f5e7d0]/65 hover:bg-[#490d20]/90"
            >
              <span>Begin Tarot Reading</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Scroll Hint pinned bottom-center */}
        <div
          ref={scrollHintRef}
          aria-hidden="true"
          className="pointer-events-none absolute bottom-6 left-1/2 z-20 -translate-x-1/2 font-mono text-[11px] uppercase tracking-[0.24em] text-[#ffd36b]/75 transition-opacity duration-500"
        >
          scroll ↓
        </div>
      </div>
    </section>
  );
}
