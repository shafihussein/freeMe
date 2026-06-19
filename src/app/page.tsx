import Link from "next/link";
import {
  ArrowRight,
  Zap,
  Shield,
  Globe,
  CheckCircle,
  Star,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-foreground/10 bg-background/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6 flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight">
            free<span className="text-primarylw">Me</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm text-foreground/70">
            <Link href="#features" className="hover:text-foreground transition-colors">Features</Link>
            <Link href="#how-it-works" className="hover:text-foreground transition-colors">How it works</Link>
            <Link href="#pricing" className="hover:text-foreground transition-colors">Pricing</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link
              href="/sign-in"
              className="text-sm text-foreground/70 hover:text-foreground transition-colors"
            >
              Sign in
            </Link>
            <Link
              href="/register"
              className="inline-flex items-center gap-1.5 rounded-full bg-primarylw px-4 py-2 text-sm font-medium text-white hover:bg-primarylw/90 transition-colors"
            >
              Get started <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden py-24 md:py-40">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(120,119,198,0.25),transparent)]" />
          <div className="mx-auto max-w-7xl px-6 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-foreground/5 px-4 py-1.5 text-sm text-foreground/70 mb-8">
              <Star className="h-3.5 w-3.5 fill-primarylw text-primarylw" />
              Now in public beta — join 10,000+ users
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6">
              Reclaim your
              <span className="block text-primarylw">freedom</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg md:text-xl text-foreground/60 mb-10">
              freeMe helps you break free from distractions, own your time, and
              build the life you actually want — one focused session at a time.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/register"
                className="inline-flex items-center gap-2 rounded-full bg-primarylw px-8 py-3.5 text-base font-semibold text-white hover:bg-primarylw/90 transition-colors shadow-lg shadow-primarylw/20"
              >
                Start for free <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-8 py-3.5 text-base font-medium text-foreground/80 hover:border-foreground/30 hover:text-foreground transition-colors"
              >
                See how it works
              </Link>
            </div>
          </div>
        </section>

        {/* Social proof strip */}
        <section className="border-y border-foreground/10 py-10 bg-foreground/[0.02]">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-16 text-center">
              {[
                { value: "10K+", label: "Active users" },
                { value: "2M+", label: "Sessions logged" },
                { value: "98%", label: "Satisfaction rate" },
                { value: "4.9/5", label: "Average rating" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-foreground/50 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                Everything you need to thrive
              </h2>
              <p className="text-foreground/60 text-lg max-w-xl mx-auto">
                A complete toolkit designed around how you actually work, not
                how productivity gurus think you should.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Zap,
                  title: "Instant focus mode",
                  description:
                    "Block distractions with one click. Deep work sessions that actually stick.",
                },
                {
                  icon: Shield,
                  title: "Privacy first",
                  description:
                    "Your data stays yours. End-to-end encrypted, zero tracking, always.",
                },
                {
                  icon: Globe,
                  title: "Works everywhere",
                  description:
                    "Seamlessly synced across all your devices. Start on desktop, continue on mobile.",
                },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="group rounded-2xl border border-foreground/10 bg-foreground/[0.02] p-8 hover:border-primarylw/30 hover:bg-primarylw/5 transition-all duration-300"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primarylw/10 mb-6">
                    <feature.icon className="h-6 w-6 text-primarylw" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-foreground/60 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="py-24 bg-foreground/[0.02] border-y border-foreground/10">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                Simple by design
              </h2>
              <p className="text-foreground/60 text-lg max-w-xl mx-auto">
                Three steps is all it takes to get your freedom back.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-12 relative">
              <div className="hidden md:block absolute top-8 left-[calc(33%+1rem)] right-[calc(33%+1rem)] h-px bg-foreground/10" />
              {[
                {
                  step: "01",
                  title: "Create your account",
                  description:
                    "Sign up in seconds. No credit card required to start your free plan.",
                },
                {
                  step: "02",
                  title: "Set your intentions",
                  description:
                    "Tell freeMe what matters to you. Build a schedule that works around your life.",
                },
                {
                  step: "03",
                  title: "Own your time",
                  description:
                    "Start sessions, track progress, and watch your focus compound over time.",
                },
              ].map((item) => (
                <div key={item.step} className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primarylw/10 border-2 border-primarylw/20 flex items-center justify-center text-primarylw font-bold text-lg mb-6 relative z-10 bg-background">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-foreground/60 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="pricing" className="py-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Ready to break free?
            </h2>
            <p className="text-foreground/60 text-lg mb-8 max-w-xl mx-auto">
              Join thousands of people who&apos;ve already reclaimed their time.
              Free plan available — no credit card needed.
            </p>
            <div className="inline-flex flex-col items-center gap-4">
              <Link
                href="/register"
                className="inline-flex items-center gap-2 rounded-full bg-primarylw px-10 py-4 text-base font-semibold text-white hover:bg-primarylw/90 transition-colors shadow-xl shadow-primarylw/20"
              >
                Create your free account <ArrowRight className="h-4 w-4" />
              </Link>
              <div className="flex items-center gap-5 text-sm text-foreground/50">
                {["Free forever plan", "No credit card", "Cancel anytime"].map((item) => (
                  <span key={item} className="flex items-center gap-1.5">
                    <CheckCircle className="h-3.5 w-3.5 text-primarylw" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-foreground/10 py-12 bg-foreground/[0.02]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <Link href="/" className="text-lg font-bold tracking-tight">
              free<span className="text-primarylw">Me</span>
            </Link>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-foreground/50">
              <Link href="#" className="hover:text-foreground transition-colors">Privacy</Link>
              <Link href="#" className="hover:text-foreground transition-colors">Terms</Link>
              <Link href="#" className="hover:text-foreground transition-colors">Contact</Link>
              <Link href="#" className="hover:text-foreground transition-colors">Blog</Link>
            </div>
            <p className="text-sm text-foreground/40">
              &copy; {new Date().getFullYear()} freeMe. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
