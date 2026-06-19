import Link from "next/link";
import { ArrowLeft, Mail, ArrowRight } from "lucide-react";

export default function ResetPasswordPage() {
  return (
    <div className="w-full max-w-md">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight mb-2">
          Reset your password
        </h1>
        <p className="text-foreground/60">
          Enter your email and we&apos;ll send a reset link
        </p>
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

        <button
          type="submit"
          className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primarylw px-4 py-3 text-sm font-semibold text-white hover:bg-primarylw/90 transition-colors shadow-lg shadow-primarylw/15 mt-2"
        >
          Send reset link <ArrowRight className="h-4 w-4" />
        </button>
      </form>

      <div className="mt-6 text-center">
        <Link
          href="/sign-in"
          className="inline-flex items-center gap-1.5 text-sm text-foreground/55 hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to sign in
        </Link>
      </div>
    </div>
  );
}
