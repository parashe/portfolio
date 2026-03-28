"use client";

import { HERO_STATS } from "@/data/portfolio";
import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function AnimatedNum({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const c = animate(0, value, {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => c.stop();
  }, [inView, value]);

  return (
    <div ref={ref}>
      <div className="font-display text-[1.8rem] font-extrabold tracking-[-0.03em] text-port-text">
        {n}
        {suffix ? (
          <span className="text-[1.1rem] text-port-accent">{suffix}</span>
        ) : null}
      </div>
    </div>
  );
}

export function HeroStats() {
  return (
    <div className="flex flex-wrap gap-10 border-t border-port-border pt-6 sm:gap-[2.5rem]">
      {HERO_STATS.map((s) => (
        <div key={s.label}>
          {s.kind === "number" ? (
            <AnimatedNum value={s.value} suffix={s.suffix} />
          ) : (
            <div className="font-display text-[1.5rem] font-extrabold tracking-[-0.03em] text-port-text sm:text-[1.8rem]">
              {s.display}
            </div>
          )}
          <div className="font-mono text-[0.72rem] uppercase tracking-[0.1em] text-port-text3">
            {s.label}
          </div>
          {s.kind === "text" && s.sublabel ? (
            <div className="mt-1 font-mono text-[0.65rem] text-port-text3">
              {s.sublabel}
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}
