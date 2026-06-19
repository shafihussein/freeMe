"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface MeteorItem {
  id: number;
  left: string;
  delay: string;
  duration: string;
}

interface MeteorsProps {
  number?: number;
  className?: string;
}

export function Meteors({ number = 20, className }: MeteorsProps) {
  const [meteors, setMeteors] = useState<MeteorItem[]>([]);

  useEffect(() => {
    setMeteors(
      Array.from({ length: number }, (_, i) => ({
        id: i,
        left: `${Math.floor(Math.random() * 100)}%`,
        delay: `${(Math.random() * 4).toFixed(2)}s`,
        duration: `${(2 + Math.random() * 3).toFixed(2)}s`,
      }))
    );
  }, [number]);

  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      {meteors.map((m) => (
        <span
          key={m.id}
          className="absolute top-0 h-20 w-px bg-gradient-to-b from-white/60 to-transparent"
          style={{
            left: m.left,
            animation: `meteorFall ${m.duration} ${m.delay} linear infinite`,
          }}
        />
      ))}
    </div>
  );
}
