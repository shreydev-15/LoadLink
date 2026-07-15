import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { fadeUp, ease } from "../../lib/animations";
import { cn } from "../../lib/utils";

export default function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
  y = 32,
  once = true,
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: "-80px" });
  const reduceMotion = useReducedMotion();
  const Component = motion[as] || motion.div;

  return (
    <Component
      ref={ref}
      initial={reduceMotion ? false : { opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : reduceMotion ? {} : { opacity: 0, y }}
      transition={{ duration: 0.7, delay, ease }}
      className={cn(className)}
    >
      {children}
    </Component>
  );
}

export function RevealStagger({ children, className }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.1 } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({ children, className }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={reduceMotion ? {} : fadeUp}
      transition={{ duration: 0.6, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
