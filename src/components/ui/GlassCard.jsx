import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export default function GlassCard({
  children,
  className,
  hover = true,
  as: Component = motion.div,
  ...props
}) {
  return (
    <Component
      whileHover={hover ? { y: -6 } : undefined}
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
      className={cn(
        "glass-card relative overflow-hidden rounded-2xl p-6 sm:p-8",
        hover && "transition-shadow duration-300 hover:shadow-[0_24px_48px_rgba(0,0,0,0.35)]",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
