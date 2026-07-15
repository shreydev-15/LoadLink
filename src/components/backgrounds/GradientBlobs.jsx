import { motion, useReducedMotion } from "framer-motion";

export default function GradientBlobs({ className = "" }) {
  const reduceMotion = useReducedMotion();

  const animate = reduceMotion
    ? {}
    : {
        x: [0, 24, 0],
        y: [0, -16, 0],
      };

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      <motion.div
        animate={animate}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-20 top-1/4 h-64 w-64 rounded-full bg-blue-600/12 blur-[100px] sm:h-96 sm:w-96 sm:blur-[120px]"
      />
      <motion.div
        animate={reduceMotion ? {} : { x: [0, -20, 0], y: [0, 24, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-16 bottom-1/4 h-56 w-56 rounded-full bg-purple-600/10 blur-[90px] sm:h-80 sm:w-80 sm:blur-[110px]"
      />
      <motion.div
        animate={reduceMotion ? {} : { x: [0, 16, 0], y: [0, 20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-1/3 top-1/3 h-48 w-48 rounded-full bg-cyan-500/8 blur-[80px] sm:h-72 sm:w-72"
      />
    </div>
  );
}
