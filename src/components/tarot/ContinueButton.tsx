import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { GoldButton } from "@/components/arcana/GoldButton";

export function ContinueButton({
  onClick,
  disabled,
  label = "Continue",
}: {
  onClick?: () => void;
  disabled?: boolean;
  label?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky bottom-4 z-30 mx-auto w-full max-w-md px-2"
    >
      <GoldButton size="lg" onClick={onClick} disabled={disabled} className="w-full">
        {label} <ArrowRight className="h-4 w-4" />
      </GoldButton>
    </motion.div>
  );
}
