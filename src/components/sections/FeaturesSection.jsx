import { Zap, Route, Shield, Layers, Activity, DollarSign } from "lucide-react";
import Badge from "../ui/Badge";
import GlassCard from "../ui/GlassCard";
import SectionHeader from "../ui/SectionHeader";
import { RevealStagger, RevealItem } from "../ui/Reveal";

const features = [
  { icon: Zap, title: "Smart Matching", desc: "AI pairs shipments with drivers in milliseconds using route overlap, weight, and timing algorithms.", gradient: "from-blue-500 to-cyan-400" },
  { icon: Route, title: "Route Optimization", desc: "Dynamic rerouting reduces total miles, fuel costs, and emissions for every connected journey.", gradient: "from-cyan-500 to-teal-400" },
  { icon: Shield, title: "Secure Verification", desc: "Every driver is background-checked, licensed, and insured. Every shipment is covered end-to-end.", gradient: "from-purple-500 to-violet-400" },
  { icon: Layers, title: "Capacity Tracking", desc: "Real-time visibility into available space across your fleet so nothing leaves half-empty.", gradient: "from-blue-500 to-purple-500" },
  { icon: Activity, title: "Live Shipment Updates", desc: "GPS-powered tracking with SMS and app notifications at every waypoint and delivery milestone.", gradient: "from-cyan-400 to-blue-500" },
  { icon: DollarSign, title: "Cost Savings", desc: "Businesses save 25–40% on freight costs. Drivers earn 30% more per mile driven on average.", gradient: "from-green-500 to-cyan-500" },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="overflow-hidden bg-brand-900 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={<Badge variant="blue">Platform Features</Badge>}
          title="Built for Scale,"
          highlight="Designed for Speed"
          description="Every feature is crafted to eliminate wasted miles and put more money in drivers' pockets."
        />

        <RevealStagger className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <RevealItem key={f.title}>
                <GlassCard className="group h-full">
                  <div className={`absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br ${f.gradient} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-15`} aria-hidden />
                  <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${f.gradient} text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                    <Icon size={22} aria-hidden />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-white">{f.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-400">{f.desc}</p>
                </GlassCard>
              </RevealItem>
            );
          })}
        </RevealStagger>
      </div>
    </section>
  );
}
