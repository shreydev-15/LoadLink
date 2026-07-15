import { motion, useReducedMotion } from "framer-motion";
import { Globe, MapPin, Route, Truck, Package } from "lucide-react";
import Badge from "../ui/Badge";
import Reveal from "../ui/Reveal";

const stats = [
  { icon: MapPin, val: "50+", label: "Cities Covered" },
  { icon: Route, val: "8,200+", label: "Active Routes" },
  { icon: Truck, val: "12,400+", label: "Registered Drivers" },
  { icon: Package, val: "340K+", label: "Loads Delivered" },
];

const routes = [
  { d: "M 120 100 Q 160 60, 200 100", delay: 0 },
  { d: "M 200 100 Q 240 140, 280 100", delay: 0.2 },
  { d: "M 80 140 Q 140 80, 200 100", delay: 0.4 },
  { d: "M 60 120 Q 100 160, 140 140", delay: 0.3 },
  { d: "M 240 120 Q 280 80, 320 120", delay: 0.5 },
];

function GlobeVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto aspect-square w-full max-w-md lg:max-w-lg">
      <div className="absolute inset-0 rounded-full bg-blue-500/8 blur-3xl" aria-hidden />
      <motion.div
        animate={reduceMotion ? {} : { rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="relative flex h-full w-full items-center justify-center"
      >
        <svg viewBox="0 0 400 400" className="h-full w-full" aria-hidden>
          <defs>
            <radialGradient id="globeGrad" cx="40%" cy="35%">
              <stop offset="0%" stopColor="#1a3a6e" />
              <stop offset="100%" stopColor="#060a18" />
            </radialGradient>
            <linearGradient id="arcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1a6cf6" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#63b3ff" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0.4" />
            </linearGradient>
          </defs>

          <circle cx="200" cy="200" r="150" fill="url(#globeGrad)" stroke="rgba(99,179,255,0.15)" strokeWidth="1" />
          <circle cx="200" cy="200" r="150" fill="none" stroke="rgba(26,108,246,0.12)" strokeWidth="1" strokeDasharray="4 8" />

          {/* Latitude lines */}
          {[-60, -30, 0, 30, 60].map((y, i) => (
            <ellipse
              key={i}
              cx="200"
              cy={200 + y * 0.6}
              rx={Math.sqrt(150 * 150 - (y * 0.6) ** 2)}
              ry={Math.sqrt(150 * 150 - (y * 0.6) ** 2) * 0.3}
              fill="none"
              stroke="rgba(99,179,255,0.08)"
              strokeWidth="1"
            />
          ))}

          {routes.map(({ d, delay }, i) => (
            <motion.path
              key={i}
              d={d}
              fill="none"
              stroke="url(#arcGrad)"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay, ease: "easeInOut" }}
            />
          ))}

          {[
            [120, 100], [200, 100], [280, 100], [140, 140], [320, 120],
          ].map(([cx, cy], i) => (
            <motion.circle
              key={i}
              cx={cx}
              cy={cy}
              r="5"
              fill={i % 2 === 0 ? "#63b3ff" : "#a855f7"}
              initial={{ scale: 0 }}
              whileInView={{ scale: [1, 1.4, 1] }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.1, duration: 2, repeat: Infinity }}
            />
          ))}
        </svg>
      </motion.div>

      {/* Floating stat pills on globe */}
      <motion.div
        animate={reduceMotion ? {} : { y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute right-4 top-8 rounded-xl border border-white/10 bg-brand-800/90 px-3 py-2 text-xs font-medium text-white shadow-lg backdrop-blur-md sm:text-sm"
      >
        🌐 50+ Cities
      </motion.div>
    </div>
  );
}

export default function GlobeSection() {
  return (
    <section className="overflow-hidden bg-brand-900 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <Badge variant="cyan" icon={<Globe size={14} aria-hidden />}>
              Global Coverage
            </Badge>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Routes Across
              <br />
              <span className="gradient-text">Every Corridor</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-400 sm:text-lg">
              From national highways to last-mile delivery lanes, LoadLink's network covers 50+ cities and expanding to SE Asia and the Middle East.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
              {stats.map(({ icon: Icon, val, label }) => (
                <div
                  key={label}
                  className="flex items-start gap-3 rounded-xl border border-white/7 bg-white/4 p-4 transition-colors hover:border-white/12 hover:bg-white/6"
                >
                  <Icon size={18} className="mt-0.5 shrink-0 text-blue-400" aria-hidden />
                  <div>
                    <div className="text-lg font-bold text-white">{val}</div>
                    <div className="text-xs text-slate-500">{label}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <GlobeVisual />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
