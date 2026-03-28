"use client";

import { SKILL_CATEGORIES, type SkillPillVariant } from "@/data/portfolio";
import { Reveal } from "./reveal";

const pillClass: Record<SkillPillVariant, string> = {
  default:
    "border-port-border2 bg-port-chip-subtle text-port-text2 border font-mono text-[0.7rem] px-[0.65rem] py-1 rounded-full",
  accent:
    "border-port-accent/30 bg-port-accent/15 text-port-accent2 border font-mono text-[0.7rem] px-[0.65rem] py-1 rounded-full",
  orange:
    "border-port-accent4/25 bg-port-accent4/10 text-port-accent4 border font-mono text-[0.7rem] px-[0.65rem] py-1 rounded-full",
  green:
    "border-port-accent3/25 bg-port-accent3/10 text-port-accent3 border font-mono text-[0.7rem] px-[0.65rem] py-1 rounded-full",
};

export function SkillsSection() {
  return (
    <section id="skills" className="bg-port-bg py-20 md:py-28">
      <div className="container mx-auto max-w-[1100px] px-8">
        <Reveal>
          <p className="mb-3 font-mono text-[0.72rem] uppercase tracking-[0.15em] text-port-accent">
            {"// tech stack"}
          </p>
          <h2 className="mb-3 font-display text-[clamp(1.8rem,3vw,2.6rem)] font-extrabold tracking-[-0.02em]">
            What I work with
          </h2>
          <p className="max-w-[560px] text-[1rem] font-light leading-[1.7] text-port-text2">
            Full spectrum — native mobile to cloud infrastructure.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_CATEGORIES.map((cat, i) => (
            <Reveal key={cat.title} delay={0.05 * (i + 1)}>
              <div className="rounded-[14px] border border-port-border bg-port-surface p-6 transition-all hover:-translate-y-1 hover:border-port-border2">
                <div className="mb-3 text-[1.4rem]">{cat.emoji}</div>
                <h3 className="mb-4 font-display text-[0.95rem] font-bold">
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-[0.45rem]">
                  {cat.pills.map((p) => (
                    <span key={p.label} className={pillClass[p.variant]}>
                      {p.label}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
