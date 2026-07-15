import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";
import Badge from "../ui/Badge";
import SectionHeader from "../ui/SectionHeader";
import { cn } from "../../lib/utils";

const testimonials = [
  { name: "Rajesh Mehta", role: "Logistics Director, SwiftGoods", avatar: "RM", rating: 5, text: "LoadLink cut our freight spend by 34% in just 90 days. The matching algorithm is frighteningly good — it finds drivers we never would have found ourselves. Our ops team is obsessed.", color: "blue" },
  { name: "Priya Sharma", role: "Truck Owner-Operator", avatar: "PS", rating: 5, text: "I used to return empty after every Mumbai-Delhi run. Now I pick up return loads through LoadLink and earn an extra ₹40,000 a month. The app is smooth, payouts are instant.", color: "cyan" },
  { name: "Arun Patel", role: "CEO, FreshFarm Exports", avatar: "AP", rating: 5, text: "Temperature-sensitive produce delivery used to terrify me. LoadLink's verified cold-chain drivers and live tracking gave us confidence to expand to three new markets this quarter.", color: "purple" },
  { name: "Manish Verma", role: "Fleet Manager, BuildRight Construction", avatar: "MV", rating: 5, text: "Managing 80 trucks across Gujarat was a nightmare before LoadLink. Now I see everything in one dashboard, utilization is up 28%, and my drivers love the transparent earnings.", color: "blue" },
];

const cardStyles = {
  blue: "from-blue-500/20 to-transparent border-blue-500/20",
  cyan: "from-cyan-500/20 to-transparent border-cyan-500/20",
  purple: "from-purple-500/20 to-transparent border-purple-500/20",
};

const avatarStyles = {
  blue: "from-blue-500 to-blue-700",
  cyan: "from-cyan-500 to-cyan-700",
  purple: "from-purple-500 to-purple-700",
};

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const current = testimonials[active];

  useEffect(() => {
    const timer = setInterval(() => setActive((a) => (a + 1) % testimonials.length), 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="overflow-hidden bg-brand-950 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={<Badge variant="yellow" icon={<Star size={14} aria-hidden />}>Trusted by Thousands</Badge>}
          title="Real People,"
          highlight="Real Results"
        />

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={active}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.45 }}
              className={cn(
                "rounded-2xl border bg-gradient-to-br p-6 backdrop-blur-sm sm:rounded-3xl sm:p-10",
                cardStyles[current.color]
              )}
            >
              <div className="mb-5 flex gap-1" aria-label={`${current.rating} out of 5 stars`}>
                {Array.from({ length: current.rating }).map((_, i) => (
                  <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" aria-hidden />
                ))}
              </div>
              <p className="mb-8 text-base font-light leading-relaxed text-white sm:text-xl">
                &ldquo;{current.text}&rdquo;
              </p>
              <footer className="flex items-center gap-4">
                <div className={cn("flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br font-bold text-white", avatarStyles[current.color])}>
                  {current.avatar}
                </div>
                <div>
                  <cite className="not-italic font-semibold text-white">{current.name}</cite>
                  <div className="text-sm text-slate-400">{current.role}</div>
                </div>
              </footer>
            </motion.blockquote>
          </AnimatePresence>

          <div className="mt-8 flex justify-center gap-2.5" role="tablist" aria-label="Testimonials">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === active}
                aria-label={`View testimonial ${i + 1}`}
                onClick={() => setActive(i)}
                className={cn(
                  "rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60",
                  i === active ? "h-2.5 w-7 bg-blue-400" : "h-2.5 w-2.5 bg-white/20 hover:bg-white/40"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
