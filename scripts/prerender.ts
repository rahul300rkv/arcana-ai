import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { getLocaleFromPath } from "../src/locales/index";

const ROOT_DIR = process.cwd();
const DIST_DIR = path.join(ROOT_DIR, "dist");
const SSR_DIR = path.join(ROOT_DIR, ".ssr-dist");
const SITEMAP_PATH = path.join(ROOT_DIR, "public", "sitemap.xml");
const TEMPLATE_PATH = path.join(DIST_DIR, "index.html");

const HEAD_META_RE = /<!--HEAD_META_START-->[\s\S]*?<!--HEAD_META_END-->/;
const ROOT_PLACEHOLDER = '<div id="root"><!--APP_HTML--></div>';

function extractRoutesFromSitemap(xml: string): string[] {
  const routes: string[] = [];
  const locRe = /<loc>(.*?)<\/loc>/g;
  let match: RegExpExecArray | null;
  while ((match = locRe.exec(xml)) !== null) {
    const raw = match[1].trim();
    const pathname = new URL(raw).pathname || "/";
    const normalized = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
    routes.push(normalized);
  }
  return Array.from(new Set(routes));
}

async function loadSsrModule() {
  const candidates = [
    path.join(SSR_DIR, "entry-server.js"),
    path.join(SSR_DIR, "entry-server.mjs"),
  ];
  const found = candidates.find((p) => fs.existsSync(p));
  if (!found) {
    throw new Error(`SSR bundle not found in ${SSR_DIR}. Expected entry-server.js or .mjs.`);
  }
  return (await import(pathToFileURL(found).href)) as {
    renderRoute: (urlPath: string) => Promise<{
      appHtml: string;
      headHtml: string;
      statusCode: number;
    }>;
  };
}

async function main() {
  if (!fs.existsSync(TEMPLATE_PATH)) {
    throw new Error(`Client build template missing at ${TEMPLATE_PATH}`);
  }
  if (!fs.existsSync(SITEMAP_PATH)) {
    throw new Error(`Sitemap missing at ${SITEMAP_PATH}`);
  }

  const templateHtml = fs.readFileSync(TEMPLATE_PATH, "utf8");
  if (!HEAD_META_RE.test(templateHtml)) {
    throw new Error("Template dist/index.html is missing <!--HEAD_META_START-->...<!--HEAD_META_END--> markers.");
  }
  if (!templateHtml.includes(ROOT_PLACEHOLDER)) {
    throw new Error(`Template dist/index.html is missing placeholder: ${ROOT_PLACEHOLDER}`);
  }

  const sitemapXml = fs.readFileSync(SITEMAP_PATH, "utf8");
  const routes = extractRoutesFromSitemap(sitemapXml);
  if (routes.length === 0) {
    throw new Error("No routes extracted from public/sitemap.xml");
  }

  const { renderRoute } = await loadSsrModule();
  const failures: string[] = [];

  for (const routePath of routes) {
    const { appHtml, headHtml, statusCode } = await renderRoute(routePath);
    if (statusCode !== 200 || !appHtml.trim()) {
      failures.push(`${routePath} (status=${statusCode}, len=${appHtml.length})`);
      continue;
    }

    const bcp47 = getLocaleFromPath(routePath).meta.bcp47;
    const withLang =
      bcp47 !== "en"
        ? templateHtml.replace('<html lang="en">', `<html lang="${bcp47}">`)
        : templateHtml;
    const withHead = withLang.replace(
      HEAD_META_RE,
      `<!--HEAD_META_START-->\n    ${headHtml}\n    <!--HEAD_META_END-->`,
    );
    const finalHtml = withHead.replace(
      ROOT_PLACEHOLDER,
      `<div id="root" data-prerendered-path="${routePath}">${appHtml}</div>`,
    );

    const outFile =
      routePath === "/"
        ? path.join(DIST_DIR, "index.html")
        : path.join(DIST_DIR, routePath.slice(1), "index.html");

    fs.mkdirSync(path.dirname(outFile), { recursive: true });
    fs.writeFileSync(outFile, finalHtml, "utf8");
  }

  if (failures.length > 0) {
    throw new Error(`Prerender failed for ${failures.length} route(s): ${failures.join(", ")}`);
  }

  console.log(`Successfully prerendered ${routes.length} routes into dist/.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
