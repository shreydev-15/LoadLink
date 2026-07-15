import { ArrowRight, Play, TrendingUp } from "lucide-react";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import GradientBlobs from "../backgrounds/GradientBlobs";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-brand-900 py-20 sm:py-28">
      <GradientBlobs />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <Badge variant="green" icon={<TrendingUp size={14} aria-hidden />} className="mb-6">
            Join the Network
          </Badge>
          <h2 className="mb-5 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Start Earning
            <br />
            <span className="gradient-text">From Every Mile</span>
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-xl">
            Whether you're shipping goods or driving trucks, LoadLink turns dead miles into revenue. Sign up free in under 2 minutes.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Button size="lg" iconRight={<ArrowRight size={20} aria-hidden />}>
              Create Account — Free
            </Button>
            <Button variant="secondary" size="lg" icon={<Play size={20} aria-hidden />}>
              Watch Demo
            </Button>
          </div>
          <p className="mt-8 text-sm text-slate-600">
            No credit card required • Free forever for small loads • Enterprise plans available
          </p>
        </Reveal>
      </div>
    </section>
  );
}
