"use client";

import React from "react";
import Image from "next/image";
import { X, Code2, Globe, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/app/component2/ui/button";
import { Input } from "@/app/component2/ui/input";
import icon192 from "@/assets/logo/IconKitchen_version/web/icon-192.png";

export default function Footer02() {
  return (
    <footer className="bg-background border-t border-border/40 py-24 relative overflow-hidden px-4">
      <div className="container px-4 mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-24">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-8 group cursor-pointer">
              <Image
                src={icon192}
                alt="FreeMe logo"
                width={40}
                height={40}
                className="rounded-xl rotate-3 group-hover:rotate-0 transition-transform"
              />
              <span className="text-xl font-black tracking-tighter">
                FreeMe
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-10 max-w-sm italic">
              Your path to becoming debt-free, one smart decision at a time.
              Track, budget, and plan your payoff journey — all in one place.
            </p>
            <div className="flex gap-4">
              {[X, Code2, Globe, Mail].map((Icon, i) => (
                <Button
                  key={i}
                  variant="outline"
                  size="icon"
                  className="w-10 h-10 rounded-full border-border/60 flex items-center justify-center hover:bg-muted/50 hover:border-border transition-all group p-0"
                >
                  <Icon className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                </Button>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-8">
              Solutions
            </h4>
            <ul className="space-y-4">
              {[
                "Debt Calculator",
                "Payment Reminders",
                "Progress Trackers",
                "Create Budget",
                "Set Financial Goals",
              ].map((link, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-sm font-bold text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-8">
              Support
            </h4>
            <ul className="space-y-4">
              {["Help Center", "Community", "Privacy", "Terms", "FAQ"].map(
                (link, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-sm font-bold text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="lg:col-span-4">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-8">
              Stay Updated
            </h4>
            <p className="text-xs text-muted-foreground mb-8 leading-relaxed">
              Get tips on debt payoff strategies and new FreeMe features in your
              inbox.
            </p>
            <form
              className="relative group"
              onSubmit={(e) => e.preventDefault()}
            >
              <Input
                type="email"
                placeholder="name@email.com"
                className="w-full bg-muted/30 border-none rounded-xl h-14 pr-16 focus-visible:ring-2 focus-visible:ring-primary/20 transition-all text-sm placeholder:text-muted-foreground/50"
              />
              <Button className="absolute right-1 top-1 bottom-1 px-4 bg-foreground text-background font-black rounded-lg hover:bg-foreground/90 transition-all active:scale-[0.98] text-xs h-auto">
                <ArrowRight className="w-4 h-4" />
              </Button>
            </form>
            <div className="mt-6 flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-primary">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span>Join our early community</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-xs text-muted-foreground font-bold">
            © 2026 FreeMe. All rights reserved.
          </p>
          <div className="flex gap-8">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                Systems Operational
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-muted-foreground" />
              <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                hello@freeme.app
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Background Accent */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -mr-48 -mb-48 pointer-events-none" />
    </footer>
  );
}
