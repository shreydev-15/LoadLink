import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Search, Truck, ChevronRight } from "lucide-react";
import ParticleField from "../backgrounds/ParticleField";
import GridBackground from "../backgrounds/GridBackground";
import GradientBlobs from "../backgrounds/GradientBlobs";
import Badge, { PulseDot } from "../ui/Badge";
import Button from "../ui/Button";
import HeroVisual from "./HeroVisual";
import { ease } from "../../lib/animations";

const trustStats = [
  { value: "12K+", label: "Active Drivers" },
  { value: "98%", label: "On-Time Rate" },
  { value: "$4M+", label: "Saved Monthly" },
];

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-brand-950 pt-20 sm:pt-24"
      aria-labelledby="hero-heading"
    >
      <ParticleField density={45} />
      <GridBackground />
      <GradientBlobs />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-20">
        <motion.div style={{ y, opacity }} className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7, ease }}
            className="mb-5 flex justify-center lg:justify-start"
          >
            <Badge variant="blue" icon={<PulseDot />}>
              Now live in 50+ cities
            </Badge>
          </motion.div>

          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.8, ease }}
            className="mb-5 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Turn Empty
            <br />
            <span className="gradient-text">Truck Space</span>
            <br />
            Into Revenue
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7, ease }}
            className="mx-auto mb-8 max-w-lg text-base leading-relaxed text-slate-400 sm:text-lg lg:mx-0"
          >
            A peer-to-peer marketplace that connects businesses with truck drivers who have unused cargo space. Reduce costs, cut emissions, earn more.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.7, ease }}
            className="mb-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start"
          >
            <Button icon={<Search size={18} />} iconRight={<ChevronRight size={16} />} size="lg">
              Find Loads
            </Button>
            <Button variant="secondary" icon={<Truck size={18} />} size="lg">
              Become a Driver
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75, duration: 0.7 }}
            className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 lg:justify-start"
          >
            {trustStats.map(({ value, label }) => (
              <div key={label} className="text-center lg:text-left">
                <div className="text-lg font-bold text-white sm:text-xl">{value}</div>
                <div className="mt-0.5 text-xs text-slate-500">{label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <HeroVisual />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2"
        aria-hidden
      >
        <span className="text-xs text-slate-500">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex h-8 w-5 items-start justify-center rounded-full border border-white/15 pt-1.5"
        >
          <div className="h-2 w-1 rounded-full bg-blue-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
