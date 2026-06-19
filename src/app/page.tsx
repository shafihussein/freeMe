import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-full px-6 py-24 text-center">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Eyebrow */}
        <span className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-foreground/5 px-4 py-1.5 text-sm text-foreground/60">
          <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          Free — no credit card required
        </span>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-zinc-900 dark:text-zinc-100 leading-[1.05]">
          Start Your{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-purple-600">
            Payoff Journey
          </span>
        </h1>

        {/* Sub-copy */}
        <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto leading-relaxed">
          Track every debt, plan your payoff, and watch your net worth grow.
          freeMe gives you the tools to become debt-free — one smart decision at
          a time.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            href="/register"
            className="inline-flex items-center gap-2 rounded-xl bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 px-8 py-3.5 text-base font-black hover:-translate-y-0.5 transition-transform shadow-lg"
          >
            Get started free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="#"
            className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 dark:border-zinc-800 px-8 py-3.5 text-base font-bold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
          >
            See how it works
          </Link>
        </div>

        {/* Trust strip */}
        <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-sm text-zinc-500 dark:text-zinc-500">
          {["No credit card", "Cancel anytime", "Your data stays private"].map(
            (item) => (
              <span key={item} className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-indigo-500 shrink-0" />
                {item}
              </span>
            )
          )}
        </div>
      </div>
    </main>
  );
}
