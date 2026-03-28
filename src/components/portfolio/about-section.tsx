"use client";

import { ABOUT_COPY, PERSON } from "@/data/portfolio";
import Image from "next/image";
import { Reveal } from "./reveal";

export function AboutSection() {
  return (
    <section id="about" className="bg-port-bg2 py-20 md:py-28">
      <div className="container mx-auto max-w-[1100px] px-8">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-port-border2 bg-gradient-to-br from-port-bg3 to-[#1a1b2e]">
              <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(91,106,240,0.15),transparent_70%)]" />
              <Image
                src={PERSON.profileImage}
                alt={PERSON.name}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute -bottom-4 -right-4 z-20 rounded-[10px] bg-port-accent px-4 py-2 font-display text-[0.75rem] font-bold text-white shadow-[0_8px_24px_rgba(91,106,240,0.5)]">
                {ABOUT_COPY.photoBadge}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mb-3 font-mono text-[0.72rem] uppercase tracking-[0.15em] text-port-accent">
              {ABOUT_COPY.kicker}
            </p>
            <h2 className="mb-4 font-display text-[clamp(1.8rem,3vw,2.6rem)] font-extrabold tracking-[-0.02em]">
              {ABOUT_COPY.title}
            </h2>
            <p className="max-w-full text-[1rem] font-light leading-[1.7] text-port-text2">
              {ABOUT_COPY.p1}
            </p>
            <br />
            <p className="text-[0.9rem] font-light leading-[1.7] text-port-text2">
              {ABOUT_COPY.p2Prefix}
              <strong className="font-normal text-port-text">
                {ABOUT_COPY.p2Job}
              </strong>
              {ABOUT_COPY.p2Mid}
              <strong className="font-normal text-port-text">
                {ABOUT_COPY.p2Edu}
              </strong>
              {ABOUT_COPY.p2Suffix}
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {ABOUT_COPY.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-port-border bg-port-chip px-3 py-1 font-mono text-[0.75rem] text-port-text2"
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
