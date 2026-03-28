"use client";

import { CONTACT_COPY, PERSON } from "@/data/portfolio";
import Link from "next/link";
import { Reveal } from "./reveal";

export function ContactSection() {
  return (
    <section id="contact" className="bg-port-bg py-20 md:py-28">
      <div className="container mx-auto max-w-[1100px] px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[20px] border border-port-border2 bg-port-surface px-6 py-16 text-center md:px-16">
            <div className="pointer-events-none absolute -top-[100px] left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(91,106,240,0.15),transparent_70%)]" />
            <p className="relative mb-4 font-mono text-[0.72rem] uppercase tracking-[0.15em] text-port-accent">
              {CONTACT_COPY.kicker}
            </p>
            <h2 className="relative mb-4 font-display text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-[-0.02em]">
              {CONTACT_COPY.title}
            </h2>
            <p className="relative mx-auto mb-8 max-w-[500px] text-[1rem] font-light leading-[1.7] text-port-text2">
              {CONTACT_COPY.description}
            </p>
            <a
              href={`mailto:${PERSON.email}`}
              className="relative mb-8 block font-display text-[1.4rem] font-bold text-port-accent no-underline transition-opacity hover:opacity-75"
            >
              {PERSON.email}
            </a>
            <div className="relative flex flex-wrap justify-center gap-4">
              <Link
                href={PERSON.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-[10px] border border-port-border2 bg-port-chip px-5 py-3 font-mono text-[0.8rem] text-port-text2 no-underline transition-all hover:border-port-accent/30 hover:bg-port-accent/10 hover:text-port-text"
              >
                <span>⌥</span> GitHub
              </Link>
              <Link
                href={PERSON.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-[10px] border border-port-border2 bg-port-chip px-5 py-3 font-mono text-[0.8rem] text-port-text2 no-underline transition-all hover:border-port-accent/30 hover:bg-port-accent/10 hover:text-port-text"
              >
                <span>in</span> LinkedIn
              </Link>
              <Link
                href={PERSON.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-[10px] border border-port-border2 bg-port-chip px-5 py-3 font-mono text-[0.8rem] text-port-text2 no-underline transition-all hover:border-port-accent/30 hover:bg-port-accent/10 hover:text-port-text"
              >
                <span>🌐</span> parash.vercel.app
              </Link>
              <a
                href={PERSON.cvPath}
                download
                className="flex items-center gap-2 rounded-[10px] border border-port-border2 bg-port-chip px-5 py-3 font-mono text-[0.8rem] text-port-text2 no-underline transition-all hover:border-port-accent/30 hover:bg-port-accent/10 hover:text-port-text"
              >
                <span>📄</span> Download CV
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
