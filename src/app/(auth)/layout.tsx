import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex h-16 items-center px-6">
        <Link href="/" className="text-lg font-bold tracking-tight">
          free<span className="text-primarylw">Me</span>
        </Link>
      </header>
      <main className="flex-1 flex items-center justify-center px-6 py-12">
        {children}
      </main>
      <footer className="flex h-16 items-center justify-center px-6">
        <p className="text-sm text-foreground/40">
          &copy; {new Date().getFullYear()} freeMe
        </p>
      </footer>
    </div>
  );
}
