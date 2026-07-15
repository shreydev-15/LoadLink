import { Mail, MessageSquare, MapPin } from "lucide-react";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import GlassCard from "../ui/GlassCard";
import SectionHeader from "../ui/SectionHeader";
import Reveal, { RevealStagger, RevealItem } from "../ui/Reveal";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    detail: "hello@loadlink.io",
    desc: "We respond within 24 hours on business days.",
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    detail: "Available 9am–9pm IST",
    desc: "Talk to our support team in real time.",
  },
  {
    icon: MapPin,
    title: "Headquarters",
    detail: "Mumbai, India",
    desc: "Serving logistics corridors across the nation.",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="overflow-hidden bg-brand-950 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={<Badge variant="blue">Get in Touch</Badge>}
          title="Ready to Transform"
          highlight="Your Logistics?"
          description="Have questions about pricing, partnerships, or enterprise plans? Our team is here to help."
        />

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <RevealStagger className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {contactMethods.map(({ icon: Icon, title, detail, desc }) => (
              <RevealItem key={title}>
                <GlassCard hover={false} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 text-white">
                    <Icon size={20} aria-hidden />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{title}</h3>
                    <p className="mt-0.5 text-sm font-medium text-cyan-300">{detail}</p>
                    <p className="mt-1 text-sm text-slate-500">{desc}</p>
                  </div>
                </GlassCard>
              </RevealItem>
            ))}
          </RevealStagger>

          <Reveal delay={0.1}>
            <GlassCard hover={false} className="h-full">
              <h3 className="mb-5 text-xl font-bold text-white">Send a Message</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm text-slate-400">Name</label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      className="w-full rounded-lg border border-white/8 bg-white/5 px-3 py-2.5 text-sm text-white placeholder:text-slate-600 outline-none transition-colors focus:border-blue-500/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm text-slate-400">Email</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="you@company.com"
                      className="w-full rounded-lg border border-white/8 bg-white/5 px-3 py-2.5 text-sm text-white placeholder:text-slate-600 outline-none transition-colors focus:border-blue-500/50"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm text-slate-400">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us about your logistics needs..."
                    className="w-full resize-none rounded-lg border border-white/8 bg-white/5 px-3 py-2.5 text-sm text-white placeholder:text-slate-600 outline-none transition-colors focus:border-blue-500/50"
                  />
                </div>
                <Button type="submit" size="md" className="w-full sm:w-auto">
                  Send Message
                </Button>
              </form>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
