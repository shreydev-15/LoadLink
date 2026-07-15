import { motion } from "framer-motion";
import { Filter } from "lucide-react";
import Badge from "../ui/Badge";
import SectionHeader from "../ui/SectionHeader";
import GridBackground from "../backgrounds/GridBackground";
import Reveal from "../ui/Reveal";
import { cn } from "../../lib/utils";

const kpis = [
  { label: "Active Loads", value: "247", delta: "+12%", deltaClass: "text-blue-400" },
  { label: "Revenue Today", value: "₹4.2L", delta: "+8%", deltaClass: "text-green-400" },
  { label: "Drivers Online", value: "89", delta: "+5", deltaClass: "text-cyan-400" },
  { label: "Avg Match Time", value: "2.4m", delta: "-18%", deltaClass: "text-purple-400" },
];

const shipments = [
  { id: "SHP-2841", from: "Mumbai", to: "Delhi", weight: "4.2t", status: "In Transit", pct: 68, barClass: "bg-blue-400", badgeClass: "text-blue-400 bg-blue-400/10 border-blue-400/20" },
  { id: "SHP-2842", from: "Bangalore", to: "Chennai", weight: "2.8t", status: "Matched", pct: 30, barClass: "bg-cyan-400", badgeClass: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20" },
  { id: "SHP-2843", from: "Pune", to: "Hyderabad", weight: "6.1t", status: "Delivered", pct: 100, barClass: "bg-green-400", badgeClass: "text-green-400 bg-green-400/10 border-green-400/20" },
];

const sidebarItems = ["Overview", "Shipments", "Drivers", "Routes", "Earnings", "Analytics", "Settings"];
const chartHeights = [40, 65, 45, 80, 55, 90, 70];
const days = ["M", "T", "W", "T", "F", "S", "S"];

export default function DashboardPreview() {
  return (
    <section id="dashboard" className="relative overflow-hidden bg-brand-950 py-20 sm:py-28">
      <GridBackground />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={<Badge variant="purple">Platform Preview</Badge>}
          title="Command Center for"
          highlight="Every Shipment"
          description="A unified dashboard to track loads, drivers, earnings, and routes in real time."
        />

        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-white/8 bg-brand-800 shadow-[0_32px_80px_rgba(0,0,0,0.55)] sm:rounded-3xl">
            {/* Window chrome */}
            <div className="flex flex-wrap items-center gap-2 border-b border-white/6 bg-white/2 px-4 py-3 sm:px-5 sm:py-4">
              <div className="flex gap-1.5" aria-hidden>
                <div className="h-3 w-3 rounded-full bg-red-500/70" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/70" />
                <div className="h-3 w-3 rounded-full bg-green-500/70" />
              </div>
              <div className="flex min-w-0 flex-1 items-center gap-2 rounded-md border border-white/6 bg-white/4 px-3 py-1 sm:ml-4 sm:flex-none">
                <div className="h-3 w-3 shrink-0 rounded-full bg-blue-400" aria-hidden />
                <span className="truncate text-xs text-slate-400">app.loadlink.io/dashboard</span>
              </div>
            </div>

            <div className="flex flex-col md:flex-row">
              {/* Sidebar */}
              <aside className="hidden w-52 shrink-0 flex-col gap-1 border-b border-white/6 bg-white/1 p-4 md:flex md:border-b-0 md:border-r lg:w-56">
                {sidebarItems.map((item, i) => (
                  <div
                    key={item}
                    className={cn(
                      "flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-all",
                      i === 1
                        ? "border border-blue-500/25 bg-blue-500/15 text-blue-300"
                        : "text-slate-500 hover:bg-white/4 hover:text-slate-300"
                    )}
                  >
                    <div className={cn("h-1.5 w-1.5 rounded-full", i === 1 ? "bg-blue-400" : "bg-slate-700")} aria-hidden />
                    {item}
                  </div>
                ))}
              </aside>

              {/* Main content */}
              <div className="min-w-0 flex-1 p-4 sm:p-6">
                <div className="mb-5 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
                  {kpis.map(({ label, value, delta, deltaClass }) => (
                    <div key={label} className="rounded-xl border border-white/7 bg-white/4 p-3 sm:p-4">
                      <div className="mb-1.5 text-xs text-slate-400">{label}</div>
                      <div className="text-lg font-bold text-white sm:text-xl">{value}</div>
                      <div className={cn("mt-1 text-xs", deltaClass)}>{delta}</div>
                    </div>
                  ))}
                </div>

                <div className="grid gap-4 lg:grid-cols-5">
                  <div className="rounded-xl border border-white/7 bg-white/3 p-4 lg:col-span-3">
                    <div className="mb-4 flex items-center justify-between gap-2">
                      <span className="text-sm font-semibold text-white">Live Shipments</span>
                      <button type="button" className="flex items-center gap-1.5 rounded-lg border border-white/10 px-2.5 py-1 text-xs text-slate-400 transition-colors hover:bg-white/5">
                        <Filter size={12} aria-hidden /> Filter
                      </button>
                    </div>
                    <div className="space-y-3">
                      {shipments.map((s) => (
                        <div
                          key={s.id}
                          className="flex flex-col gap-3 rounded-lg bg-white/3 p-3 transition-colors hover:bg-white/6 sm:flex-row sm:items-center"
                        >
                          <div className="min-w-0 shrink-0 sm:w-36">
                            <div className="text-xs font-medium text-white">{s.id}</div>
                            <div className="truncate text-xs text-slate-500">{s.from} → {s.to}</div>
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="mb-1 flex justify-between text-xs text-slate-400">
                              <span>{s.weight}</span>
                              <span>{s.pct}%</span>
                            </div>
                            <div className="h-1.5 rounded-full bg-white/10">
                              <div className={cn("h-full rounded-full", s.barClass)} style={{ width: `${s.pct}%` }} />
                            </div>
                          </div>
                          <span className={cn("shrink-0 self-start rounded-full border px-2.5 py-1 text-xs sm:self-center", s.badgeClass)}>
                            {s.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-xl border border-white/7 bg-white/3 p-4 lg:col-span-2">
                    <div className="mb-4 text-sm font-semibold text-white">Weekly Earnings</div>
                    <div className="flex h-28 items-end gap-1.5 sm:gap-2">
                      {chartHeights.map((h, i) => (
                        <motion.div
                          key={i}
                          initial={{ scaleY: 0 }}
                          whileInView={{ scaleY: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + i * 0.06, duration: 0.6 }}
                          style={{ height: `${h}%`, transformOrigin: "bottom" }}
                          className="flex-1 cursor-pointer rounded-t-md bg-gradient-to-t from-blue-600 to-cyan-400 opacity-80 transition-opacity hover:opacity-100"
                          role="presentation"
                        />
                      ))}
                    </div>
                    <div className="mt-2 flex justify-between">
                      {days.map((d, i) => (
                        <span key={i} className="flex-1 text-center text-xs text-slate-600">{d}</span>
                      ))}
                    </div>
                    <div className="mt-4 rounded-lg border border-blue-500/20 bg-blue-500/10 p-3">
                      <div className="text-xs text-slate-400">This week</div>
                      <div className="text-lg font-bold text-white">₹1,24,800</div>
                      <div className="text-xs text-green-400">↑ 22% vs last week</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
