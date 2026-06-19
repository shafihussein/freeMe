import Link from "next/link";
import { ArrowRight, Mail, Lock } from "lucide-react";

export default function SignInPage() {
  return (
    <div className="w-full max-w-md">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Welcome back</h1>
        <p className="text-foreground/60">Sign in to your freeMe account</p>
      </div>

      <form className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium">
            Email address
          </label>
          <div className="relative">
            <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground/40 pointer-events-none" />
            <input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              className="w-full rounded-xl border border-foreground/15 bg-foreground/5 pl-10 pr-4 py-3 text-sm placeholder:text-foreground/35 focus:border-primarylw focus:outline-none focus:ring-1 focus:ring-primarylw transition-colors"
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <Link
              href="/reset-password"
              className="text-xs text-primarylw hover:text-primarylw/80 transition-colors"
            >
              Forgot password?
            </Link>
          </div>
          <div className="relative">
            <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground/40 pointer-events-none" />
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              placeholder="••••••••"
              className="w-full rounded-xl border border-foreground/15 bg-foreground/5 pl-10 pr-4 py-3 text-sm placeholder:text-foreground/35 focus:border-primarylw focus:outline-none focus:ring-1 focus:ring-primarylw transition-colors"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primarylw px-4 py-3 text-sm font-semibold text-white hover:bg-primarylw/90 transition-colors shadow-lg shadow-primarylw/15 mt-2"
        >
          Sign in <ArrowRight className="h-4 w-4" />
        </button>
      </form>

      <div className="mt-6 text-center text-sm text-foreground/55">
        Don&apos;t have an account?{" "}
        <Link
          href="/register"
          className="text-primarylw hover:text-primarylw/80 font-medium transition-colors"
        >
          Create one free
        </Link>
      </div>
    </div>
  );
}
