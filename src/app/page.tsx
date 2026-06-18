export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center min-h-screen bg-background text-foreground px-6">
      <div className="text-center space-y-6 max-w-2xl">
        <h1 className="text-6xl font-bold tracking-tight text-primarylw">
          freeMe
        </h1>
        <p className="text-xl text-foreground/60">
          Next.js · TypeScript · Tailwind · Lightswind UI
        </p>
        <div className="flex items-center justify-center gap-4 pt-4">
          <span className="inline-flex items-center rounded-full bg-primarylw/10 px-4 py-1.5 text-sm font-medium text-primarylw ring-1 ring-primarylw/20">
            Ready to build
          </span>
        </div>
      </div>
    </main>
  );
}
