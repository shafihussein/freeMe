import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import StyledComponentsRegistry from "@/lib/styled-registry";
import NavMegaMenu01 from "@/components/ui/Navbar";
import Footer02 from "@/components/ui/Footer";
import ScrollContainer from "@/components/ui/Container";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "freeMe",
    template: "%s | freeMe",
  },
  description:
    "freeMe — your path to becoming debt-free, one smart decision at a time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      {/*
       * h-screen + flex flex-col + overflow-hidden:
       *   – header and footer are shrink-0 (never scroll away)
       *   – ScrollContainer takes flex-1 (remaining height)
       *   – only the middle region scrolls
       */}
      <body className="h-screen flex flex-col overflow-hidden bg-background text-foreground">
        <StyledComponentsRegistry>
          {/* ── Fixed header ── */}
          <header className="shrink-0 z-50 relative">
            <NavMegaMenu01 />
          </header>

          {/* ── Scrollable content area with meteor background ── */}
          <ScrollContainer className="flex-1">{children}</ScrollContainer>

          {/* ── Fixed footer ── */}
          <footer className="shrink-0">
            <Footer02 />
          </footer>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
