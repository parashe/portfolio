"use client";

import { AI_WORKFLOW_TOOLS, TOOLS_MARQUEE } from "@/data/portfolio";
import { Reveal } from "./reveal";

export function ToolsSection() {
  const doubled = [...TOOLS_MARQUEE, ...TOOLS_MARQUEE];
  return (
    <section id="tools" className="bg-port-bg2 py-20 md:py-28">
      <div className="container mx-auto max-w-[1100px] px-8">
        <Reveal>
          <p className="mb-3 font-mono text-[0.72rem] uppercase tracking-[0.15em] text-port-accent">
            {"// tools & workflow"}
          </p>
          <h2 className="mb-3 font-display text-[clamp(1.8rem,3vw,2.6rem)] font-extrabold tracking-[-0.02em]">
            How I build
          </h2>
          <p className="max-w-[560px] text-[1rem] font-light leading-[1.7] text-port-text2">
            The stack, platforms and AI tools that power my workflow.
          </p>
        </Reveal>

        <div className="relative mt-10 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-[2] w-20 bg-gradient-to-r from-port-bg2 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-[2] w-20 bg-gradient-to-l from-port-bg2 to-transparent" />
          <div className="flex w-max animate-marquee gap-4 hover:[animation-play-state:paused]">
            {doubled.map((chip, idx) => (
              <div
                key={`${chip.label}-${idx}`}
                className="flex items-center gap-2 whitespace-nowrap rounded-lg border border-port-border bg-port-surface px-4 py-2.5"
              >
                <span className="text-[0.9rem]">{chip.emoji}</span>
                <span className="font-mono text-[0.73rem] text-port-text2">
                  {chip.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <p className="mb-5 mt-10 font-mono text-[0.72rem] uppercase tracking-[0.15em] text-port-accent">
          {"// ai-powered workflow"}
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {AI_WORKFLOW_TOOLS.map((tool, i) => (
            <Reveal key={tool.name} delay={0.05 * i}>
              <div className="flex items-center gap-3 rounded-xl border border-port-border bg-port-surface px-5 py-4 transition-all hover:-translate-y-0.5 hover:border-port-accent2/30">
                <span className="text-[1.4rem]">{tool.emoji}</span>
                <div>
                  <p className="font-display text-[0.85rem] font-bold">
                    {tool.name}
                  </p>
                  <p className="font-mono text-[0.68rem] text-port-text3">
                    {tool.sub}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
