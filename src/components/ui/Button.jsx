import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

const variants = {
  primary:
    "bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-[0_0_30px_rgba(99,179,255,0.35)] hover:shadow-[0_0_40px_rgba(99,179,255,0.5)]",
  secondary:
    "border border-white/15 bg-white/5 text-white backdrop-blur-sm hover:border-blue-400/40 hover:bg-white/10",
  ghost: "text-slate-300 hover:text-white hover:bg-white/5",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm sm:text-base",
  lg: "px-8 py-4 text-base sm:text-lg",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  icon,
  iconRight,
  ...props
}) {
  const Component = props.href ? motion.a : motion.button;

  return (
    <Component
      whileHover={{ scale: 1.03, y: -1 }}
      whileTap={{ scale: 0.97 }}
      className={cn(
        "inline-flex items-center justify-center gap-2.5 rounded-xl font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-950",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {icon}
      {children}
      {iconRight}
    </Component>
  );
}
