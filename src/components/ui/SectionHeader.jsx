import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export default function SectionHeader({
  badge,
  badgeVariant = "blue",
  title,
  highlight,
  description,
  className,
  align = "center",
}) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={cn("mb-12 max-w-3xl sm:mb-16", alignClass, className)}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-5"
        >
          {badge}
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: 0.05 }}
        className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
      >
        {title}
        {highlight && (
          <>
            <br />
            <span className="gradient-text">{highlight}</span>
          </>
        )}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
