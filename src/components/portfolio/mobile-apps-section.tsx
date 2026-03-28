"use client";

import { MOBILE_PRODUCTION } from "@/data/portfolio";
import { Reveal } from "./reveal";

export function MobileAppsSection() {
  const m = MOBILE_PRODUCTION;
  return (
    <section id="apps" className="bg-port-bg py-20 md:py-28">
      <div className="container mx-auto max-w-[1100px] px-8">
        <Reveal>
          <p className="mb-3 font-mono text-[0.72rem] uppercase tracking-[0.15em] text-port-accent">
            {"// mobile — production"}
          </p>
          <h2 className="mb-3 font-display text-[clamp(1.8rem,3vw,2.6rem)] font-extrabold tracking-[-0.02em]">
            {m.title}
          </h2>
          <p className="max-w-[720px] text-[1rem] font-light leading-[1.7] text-port-text2">
            {m.intro}
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="relative mt-12 overflow-hidden rounded-[14px] border border-port-border bg-port-surface p-8 md:p-10">
            <div className="absolute left-0 right-0 top-0 h-0.5 bg-gradient-topline-green" />
            <div className="mb-8 flex items-start gap-4">
              <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-[13px] bg-gradient-to-br from-[#065f46] to-[#0284c7] text-[1.3rem]">
                📡
              </div>
              <div>
                <p className="font-mono text-[0.72rem] uppercase tracking-[0.12em] text-port-accent3">
                  {m.kicker}
                </p>
                <h3 className="mt-1 font-display text-[1.05rem] font-bold">
                  {m.connectivityTitle}
                </h3>
              </div>
            </div>
            <ul className="mb-10 flex list-none flex-col gap-3">
              {m.connectivity.map((line) => (
                <li
                  key={line.slice(0, 48)}
                  className="flex gap-3 text-[0.85rem] font-light leading-[1.65] text-port-text2"
                >
                  <span className="mt-0.5 shrink-0 font-mono text-[0.72rem] text-port-accent3">
                    →
                  </span>
                  {line}
                </li>
              ))}
            </ul>

            <h3 className="mb-4 font-display text-[1.05rem] font-bold">
              {m.productTitle}
            </h3>
            <ul className="mb-8 flex list-none flex-col gap-3">
              {m.product.map((line) => (
                <li
                  key={line.slice(0, 48)}
                  className="flex gap-3 text-[0.85rem] font-light leading-[1.65] text-port-text2"
                >
                  <span className="mt-0.5 shrink-0 font-mono text-[0.72rem] text-port-accent">
                    →
                  </span>
                  {line}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {m.stack.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-port-border2 bg-port-chip-subtle px-2.5 py-1 font-mono text-[0.7rem] text-port-text2"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-6">
              <span className="inline-flex items-center gap-1 rounded-md border border-port-accent4/20 bg-port-accent4/[0.08] px-2.5 py-1.5 font-mono text-[0.63rem] text-port-accent4">
                {m.confidentialNote}
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
