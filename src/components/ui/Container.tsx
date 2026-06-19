"use client";

import React from "react";
import { Meteors } from "@/components/ui/Meteors";
import { cn } from "@/lib/utils";

export interface ScrollContainerProps {
  children: React.ReactNode;
  className?: string;
  /** Toggle the meteor background effect. @default true */
  showMeteors?: boolean;
  /** Number of meteors rendered. @default 20 */
  meteorCount?: number;
}

/**
 * ScrollContainer
 * ----------------
 * The middle, scrollable region of the app shell.
 * Navbar and Footer stay fixed (rendered by the parent layout);
 * this container holds page content (e.g. the hero/CTA) and owns
 * its own scroll + relative positioning so Meteors can render
 * as an absolutely-positioned background layer behind the content.
 */
export function ScrollContainer({
  children,
  className,
  showMeteors = true,
  meteorCount = 20,
}: ScrollContainerProps) {
  return (
    <div
      className={cn(
        // fills the space between fixed navbar/footer, scrolls independently
        "relative flex-1 overflow-y-auto overflow-x-hidden",
        "bg-background",
        className
      )}
    >
      {/* Background layer — meteors render behind content via z-index */}
      {showMeteors && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Meteors number={meteorCount} />
        </div>
      )}

      {/* Foreground content — CTA, hero, page sections */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export default ScrollContainer;
