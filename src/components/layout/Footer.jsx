import { motion } from "framer-motion";
import { Truck } from "lucide-react";
import Button from "../ui/Button";

const columns = [
  { title: "Product", links: ["Features", "How It Works", "Dashboard", "Pricing", "API Docs"] },
  { title: "Company", links: ["About Us", "Blog", "Careers", "Press", "Partners"] },
  { title: "Resources", links: ["Help Center", "Community", "Status", "Changelog", "Security"] },
  { title: "Legal", links: ["Privacy Policy", "Terms of Use", "Cookie Policy", "Compliance"] },
];

const socials = [
  { label: "Twitter", icon: "𝕏" },
  { label: "LinkedIn", icon: "in" },
  { label: "GitHub", icon: "GH" },
  { label: "YouTube", icon: "▶" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/6 bg-brand-950">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-6 lg:gap-8">
          <div className="sm:col-span-2">
            <div className="mb-4 flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 shadow-[0_0_20px_rgba(99,179,255,0.4)]">
                <Truck size={17} className="text-white" aria-hidden />
              </div>
              <span className="text-xl font-bold text-white">
                Load<span className="gradient-text">Link</span>
              </span>
            </div>
            <p className="mb-6 max-w-sm text-sm leading-relaxed text-slate-500">
              Connecting businesses and drivers to eliminate empty truck miles and build a more efficient supply chain.
            </p>
            <form className="flex flex-col gap-2 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="newsletter" className="sr-only">Email address</label>
              <input
                id="newsletter"
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-lg border border-white/8 bg-white/5 px-3 py-2.5 text-sm text-white placeholder:text-slate-600 outline-none transition-colors focus:border-blue-500/50"
              />
              <Button type="submit" size="sm" className="shrink-0">Subscribe</Button>
            </form>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="mb-4 text-sm font-semibold text-white">{col.title}</h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-slate-500 transition-colors hover:text-slate-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/6 pt-8 sm:flex-row">
          <p className="text-center text-sm text-slate-600 sm:text-left">
            © 2025 LoadLink Technologies Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <motion.a
                key={s.label}
                href="#"
                aria-label={s.label}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/8 bg-white/4 text-xs font-bold text-slate-400 transition-colors hover:border-blue-400/30 hover:bg-blue-500/10 hover:text-white"
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
