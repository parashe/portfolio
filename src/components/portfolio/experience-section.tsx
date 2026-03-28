"use client";

import { EXPERIENCE_CARDS } from "@/data/portfolio";
import { Reveal } from "./reveal";

export function ExperienceSection() {
  return (
    <section id="experience" className="bg-port-bg2 py-20 md:py-28">
      <div className="container mx-auto max-w-[1100px] px-8">
        <Reveal>
          <p className="mb-3 font-mono text-[0.72rem] uppercase tracking-[0.15em] text-port-accent">
            {"// experience & education"}
          </p>
          <h2 className="font-display text-[clamp(1.8rem,3vw,2.6rem)] font-extrabold tracking-[-0.02em]">
            Where I&apos;ve been
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {EXPERIENCE_CARDS.map((card, i) => (
            <Reveal key={card.title + card.period} delay={0.05 * (i + 1)}>
              <article className="relative overflow-hidden rounded-[14px] border border-port-border bg-port-surface p-8 transition-all hover:border-port-border2">
                <div
                  className={`absolute left-0 right-0 top-0 h-0.5 ${
                    card.accent === "current"
                      ? "bg-gradient-topline-green"
                      : "bg-gradient-topline"
                  }`}
                />
                <p className="mb-3 font-mono text-[0.65rem] uppercase tracking-[0.1em] text-port-accent3">
                  {card.tag}
                </p>
                <h3 className="mb-1 font-display text-[1.05rem] font-bold">
                  {card.title}
                </h3>
                <p className="mb-1 text-[0.9rem] text-port-accent2">
                  {card.subtitle}
                </p>
                <p className="mb-4 font-mono text-[0.75rem] text-port-text3">
                  {card.period}
                </p>
                <p className="text-[0.85rem] font-light leading-[1.65] text-port-text2">
                  {card.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {card.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded border border-port-border bg-port-chip px-2 py-0.5 font-mono text-[0.65rem] text-port-text3"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
