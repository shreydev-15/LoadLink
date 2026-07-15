import { motion, useReducedMotion } from "framer-motion";
import { Truck, MapPin, Package, Clock, Navigation } from "lucide-react";

const floatingCards = [
  { icon: Navigation, text: "Route Active", pos: "top-4 right-2 sm:top-8 sm:right-6", delay: 0 },
  { icon: Package, text: "12 Matches Found", pos: "bottom-20 left-0 sm:bottom-24 sm:left-4", delay: 0.2 },
  { icon: Clock, text: "ETA: 4h 32m", pos: "bottom-4 right-2 sm:bottom-8 sm:right-8", delay: 0.4 },
];

const routePoints = "M 40 180 Q 120 80, 200 140 T 360 100";

export default function HeroVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto aspect-square w-full max-w-lg sm:max-w-xl lg:max-w-none">
      <div className="absolute inset-8 rounded-full bg-blue-500/10 blur-3xl" aria-hidden />
      <div className="absolute inset-16 rounded-full bg-cyan-400/8 blur-2xl" aria-hidden />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.3 }}
        className="relative flex h-full min-h-[320px] items-center justify-center sm:min-h-[400px] lg:min-h-[480px]"
      >
        {/* Orbit rings */}
        <motion.div
          animate={reduceMotion ? {} : { rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute h-[85%] w-[85%] rounded-full border border-dashed border-blue-400/15"
          aria-hidden
        />
        <motion.div
          animate={reduceMotion ? {} : { rotate: -360 }}
          transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
          className="absolute h-[70%] w-[70%] rounded-full border border-cyan-400/10"
          aria-hidden
        />

        {/* Route SVG */}
        <svg
          viewBox="0 0 400 280"
          className="absolute inset-0 h-full w-full"
          aria-hidden
        >
          <defs>
            <linearGradient id="routeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1a6cf6" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#63b3ff" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          <motion.path
            d={routePoints}
            fill="none"
            stroke="url(#routeGrad)"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
          />
          {[
            [40, 180], [200, 140], [360, 100],
          ].map(([cx, cy], i) => (
            <motion.circle
              key={i}
              cx={cx}
              cy={cy}
              r="6"
              fill="#63b3ff"
              initial={{ scale: 0 }}
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ delay: 0.8 + i * 0.2, duration: 2, repeat: Infinity }}
            />
          ))}
        </svg>

        {/* Central hub */}
        <motion.div
          animate={reduceMotion ? {} : { y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-10 flex h-28 w-28 flex-col items-center justify-center rounded-3xl border border-white/12 bg-brand-800/80 shadow-[0_24px_64px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:h-36 sm:w-36"
        >
          <div className="mb-2 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg sm:h-16 sm:w-16">
            <Truck size={28} className="text-white sm:w-8 sm:h-8" aria-hidden />
          </div>
          <span className="text-xs font-medium text-slate-400">Live Fleet</span>
        </motion.div>

        {/* Floating cards */}
        {floatingCards.map(({ icon: Icon, text, pos, delay }) => (
          <motion.div
            key={text}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: reduceMotion ? 0 : [0, -6, 0] }}
            transition={{
              opacity: { delay: 0.6 + delay, duration: 0.5 },
              y: { delay: 0.6 + delay, duration: 3 + delay, repeat: Infinity, ease: "easeInOut" },
            }}
            className={`absolute ${pos} z-20 flex items-center gap-2 rounded-xl border border-white/10 bg-brand-800/90 px-3 py-2 text-xs font-medium text-white shadow-xl backdrop-blur-md sm:px-3.5 sm:text-sm`}
          >
            <Icon size={14} className="text-cyan-400 shrink-0" aria-hidden />
            {text}
          </motion.div>
        ))}

        {/* Map pin accent */}
        <motion.div
          className="absolute left-8 top-1/3 flex h-10 w-10 items-center justify-center rounded-full border border-blue-400/20 bg-blue-500/10"
          animate={reduceMotion ? {} : { scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
          aria-hidden
        >
          <MapPin size={16} className="text-blue-400" />
        </motion.div>
      </motion.div>
    </div>
  );
}
