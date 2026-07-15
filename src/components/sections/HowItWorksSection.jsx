import { Package, Zap, CheckCircle } from "lucide-react";
import Badge from "../ui/Badge";
import GlassCard from "../ui/GlassCard";
import SectionHeader from "../ui/SectionHeader";
import GridBackground from "../backgrounds/GridBackground";
import { RevealStagger, RevealItem } from "../ui/Reveal";

const steps = [
  {
    n: "01",
    icon: Package,
    title: "Post Your Shipment",
    desc: "List your cargo details, dimensions, pickup and delivery points, and schedule. It takes under 3 minutes.",
    color: "blue",
  },
  {
    n: "02",
    icon: Zap,
    title: "Match With Drivers",
    desc: "Our smart algorithm instantly surfaces verified drivers with available space on overlapping routes.",
    color: "cyan",
  },
  {
    n: "03",
    icon: CheckCircle,
    title: "Deliver Efficiently",
    desc: "Confirm the match, track your shipment in real time, and pay only when delivered—with full insurance.",
    color: "purple",
  },
];

const colorMap = {
  blue: { glow: "bg-blue-500/15", border: "border-blue-500/40", icon: "from-blue-500 to-blue-600", text: "text-blue-400" },
  cyan: { glow: "bg-cyan-500/15", border: "border-cyan-500/40", icon: "from-cyan-500 to-cyan-600", text: "text-cyan-400" },
  purple: { glow: "bg-purple-500/15", border: "border-purple-500/40", icon: "from-purple-500 to-purple-600", text: "text-purple-400" },
};

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative overflow-hidden bg-brand-950 py-20 sm:py-28">
      <GridBackground />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={<Badge variant="cyan">Simple Process</Badge>}
          title="Three Steps to"
          highlight="Smarter Logistics"
          description="From posting to delivery, LoadLink keeps every step effortless."
        />

        <div className="relative">
          <div className="absolute left-[16.67%] right-[16.67%] top-16 hidden h-px md:block" aria-hidden>
            <div className="h-full bg-gradient-to-r from-blue-500/0 via-cyan-400/40 to-purple-500/0" />
          </div>

          <RevealStagger className="grid gap-6 md:grid-cols-3 md:gap-8">
            {steps.map((s) => {
              const c = colorMap[s.color];
              const Icon = s.icon;
              return (
                <RevealItem key={s.n}>
                  <GlassCard className="group relative text-center">
                    <div className={`absolute inset-0 rounded-2xl ${c.glow} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} aria-hidden />
                    <div className={`absolute inset-0 rounded-2xl border ${c.border} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} aria-hidden />
                    <div className={`relative mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${c.icon} text-white shadow-xl`}>
                      <Icon size={26} aria-hidden />
                    </div>
                    <div className={`relative mb-3 text-xs font-bold uppercase tracking-widest ${c.text}`}>{s.n}</div>
                    <h3 className="relative mb-3 text-xl font-bold text-white">{s.title}</h3>
                    <p className="relative text-sm leading-relaxed text-slate-400">{s.desc}</p>
                  </GlassCard>
                </RevealItem>
              );
            })}
          </RevealStagger>
        </div>
      </div>
    </section>
  );
}
