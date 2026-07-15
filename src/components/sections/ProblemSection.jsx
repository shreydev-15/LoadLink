import { Truck, Activity, DollarSign } from "lucide-react";
import Badge from "../ui/Badge";
import GlassCard from "../ui/GlassCard";
import SectionHeader from "../ui/SectionHeader";
import AnimatedCounter from "../ui/AnimatedCounter";
import Reveal, { RevealStagger, RevealItem } from "../ui/Reveal";

const stats = [
  {
    icon: Truck,
    value: 35,
    suffix: "%",
    label: "Empty Capacity",
    desc: "of all truck miles driven with no cargo aboard",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    icon: Activity,
    value: 87,
    suffix: "B gal",
    label: "Fuel Waste",
    desc: "in unnecessary fuel burned on empty hauls annually",
    gradient: "from-purple-500 to-purple-600",
  },
  {
    icon: DollarSign,
    value: 140,
    suffix: "B",
    label: "Lost Revenue",
    desc: "in recoverable industry revenue lost each year",
    gradient: "from-cyan-500 to-cyan-600",
  },
];

export default function ProblemSection() {
  return (
    <section className="relative overflow-hidden bg-brand-900 py-20 sm:py-28" aria-labelledby="problem-heading">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-950 to-transparent" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={<Badge variant="red">The Problem</Badge>}
          title="Millions of Truck Miles Are"
          highlight="Wasted Every Day"
          description="The logistics industry is bleeding billions from inefficient routing and empty backhauls. LoadLink fixes this."
        />

        <RevealStagger className="grid gap-5 sm:gap-6 md:grid-cols-3">
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <RevealItem key={s.label}>
                <GlassCard className="group h-full">
                  <div className={`absolute -left-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br ${s.gradient} opacity-10 blur-2xl transition-opacity group-hover:opacity-20`} aria-hidden />
                  <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${s.gradient} text-white shadow-lg`}>
                    <Icon size={26} aria-hidden />
                  </div>
                  <div className="mb-2 text-4xl font-bold text-white sm:text-5xl">
                    <AnimatedCounter to={s.value} suffix={s.suffix} />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-white">{s.label}</h3>
                  <p className="text-sm leading-relaxed text-slate-500">{s.desc}</p>
                </GlassCard>
              </RevealItem>
            );
          })}
        </RevealStagger>
      </div>
    </section>
  );
}
