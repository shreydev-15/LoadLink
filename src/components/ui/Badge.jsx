import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

const variants = {
  default: "border-white/10 bg-white/5 text-slate-300",
  blue: "border-blue-500/25 bg-blue-500/10 text-blue-300",
  cyan: "border-cyan-500/25 bg-cyan-500/10 text-cyan-300",
  purple: "border-purple-500/25 bg-purple-500/10 text-purple-300",
  red: "border-red-500/25 bg-red-500/10 text-red-400",
  yellow: "border-yellow-500/25 bg-yellow-500/10 text-yellow-400",
  green: "border-green-500/25 bg-green-500/10 text-green-400",
};

export default function Badge({ children, variant = "default", className, icon }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-medium sm:px-4 sm:text-sm",
        variants[variant],
        className
      )}
    >
      {icon}
      {children}
    </span>
  );
}

export function PulseDot({ className }) {
  return (
    <motion.span
      className={cn("h-2 w-2 rounded-full bg-cyan-400", className)}
      animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      aria-hidden
    />
  );
}
