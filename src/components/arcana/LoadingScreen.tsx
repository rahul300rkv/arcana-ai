import { motion } from "framer-motion";

export function LoadingScreen({ label = "Consulting the stars..." }: { label?: string }) {
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-background/80 backdrop-blur-md">
      <div className="flex flex-col items-center gap-4">
        <motion.div
          className="h-14 w-14 rounded-full border-2 border-transparent"
          style={{ borderTopColor: "var(--gold)", borderRightColor: "var(--gold-soft)" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
        />
        <p className="text-sm text-muted-foreground tracking-wide">{label}</p>
      </div>
    </div>
  );
}
