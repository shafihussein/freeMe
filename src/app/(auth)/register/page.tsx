import Link from "next/link";
import { ArrowRight, Mail, Lock, User } from "lucide-react";

export default function RegisterPage() {
  return (
    <div className="w-full max-w-md">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight mb-2">
          Create your account
        </h1>
        <p className="text-foreground/60">
          Start your journey to freedom — it&apos;s free
        </p>
      </div>

      <form className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium">
            Full name
          </label>
          <div className="relative">
            <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground/40 pointer-events-none" />
            <input
              id="name"
              type="text"
              autoComplete="name"
              placeholder="Jane Doe"
              className="w-full rounded-xl border border-foreground/15 bg-foreground/5 pl-10 pr-4 py-3 text-sm placeholder:text-foreground/35 focus:border-primarylw focus:outline-none focus:ring-1 focus:ring-primarylw transition-colors"
            />
          </div>
        </div>

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
          <label htmlFor="password" className="block text-sm font-medium">
            Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground/40 pointer-events-none" />
            <input
              id="password"
              type="password"
              autoComplete="new-password"
              placeholder="At least 8 characters"
              className="w-full rounded-xl border border-foreground/15 bg-foreground/5 pl-10 pr-4 py-3 text-sm placeholder:text-foreground/35 focus:border-primarylw focus:outline-none focus:ring-1 focus:ring-primarylw transition-colors"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primarylw px-4 py-3 text-sm font-semibold text-white hover:bg-primarylw/90 transition-colors shadow-lg shadow-primarylw/15 mt-2"
        >
          Create account <ArrowRight className="h-4 w-4" />
        </button>
      </form>

      <p className="mt-4 text-center text-xs text-foreground/40">
        By signing up you agree to our{" "}
        <Link
          href="#"
          className="underline hover:text-foreground/70 transition-colors"
        >
          Terms
        </Link>{" "}
        and{" "}
        <Link
          href="#"
          className="underline hover:text-foreground/70 transition-colors"
        >
          Privacy Policy
        </Link>
        .
      </p>

      <div className="mt-6 text-center text-sm text-foreground/55">
        Already have an account?{" "}
        <Link
          href="/sign-in"
          className="text-primarylw hover:text-primarylw/80 font-medium transition-colors"
        >
          Sign in
        </Link>
      </div>
    </div>
  );
}
