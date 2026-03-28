"use client";

import { CLIENT_WEBSITES } from "@/data/portfolio";
import Link from "next/link";
import { Reveal } from "./reveal";

export function ClientWebsitesSection() {
  return (
    <section id="websites" className="bg-port-bg py-20 md:py-28">
      <div className="container mx-auto max-w-[1100px] px-8">
        <Reveal>
          <p className="mb-3 font-mono text-[0.72rem] uppercase tracking-[0.15em] text-port-accent">
            {"// client websites"}
          </p>
          <h2 className="mb-3 font-display text-[clamp(1.8rem,3vw,2.6rem)] font-extrabold tracking-[-0.02em]">
            Websites designed & delivered
          </h2>
          <p className="max-w-[560px] text-[1rem] font-light leading-[1.7] text-port-text2">
            Real client sites — from UK restaurants to Nepali travel platforms,
            built with WordPress and Next.js.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CLIENT_WEBSITES.map((s, i) => (
            <Reveal key={s.id} delay={0.05 * (i + 1)}>
              <article className="rounded-xl border border-port-border bg-port-surface p-6 transition-all hover:-translate-y-0.5 hover:border-port-accent/25">
                <div className="mb-4 text-[1.3rem]">{s.emoji}</div>
                <h3 className="mb-1 font-display text-[0.9rem] font-bold">
                  {s.name}
                </h3>
                <p className="mb-3 font-mono text-[0.67rem] text-port-accent opacity-85">
                  {s.urlLabel}
                </p>
                <p className="text-[0.77rem] font-light leading-[1.5] text-port-text2">
                  {s.description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="rounded border border-port-border bg-port-chip px-2 py-0.5 font-mono text-[0.6rem] text-port-text3">
                    {s.tech}
                  </span>
                  {s.visitUrl ? (
                    <Link
                      href={s.visitUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[0.67rem] text-port-accent no-underline transition-opacity hover:opacity-70"
                    >
                      Visit →
                    </Link>
                  ) : (
                    <span className="cursor-default font-mono text-[0.67rem] text-port-text3 opacity-40">
                      {s.visitText ?? "—"}
                    </span>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
