"use client";

import { HERO_COPY, PERSON } from "@/data/portfolio";
import { motion } from "framer-motion";
import Link from "next/link";
import { HeroCodeCard } from "./hero-code-card";
import { HeroStats } from "./hero-stats";
import { Reveal } from "./reveal";
import { TypewriterRole } from "./typewriter-role";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-20"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-[100px] -top-[200px] h-[600px] w-[600px] rounded-full bg-port-accent opacity-15 blur-[80px]" />
        <div className="absolute -bottom-[100px] -left-[100px] h-[400px] w-[400px] rounded-full bg-port-accent2 opacity-15 blur-[80px]" />
        <div className="absolute left-[30%] top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-port-accent3 opacity-15 blur-[80px]" />
      </div>

      <div className="container mx-auto max-w-[1100px] px-8">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1fr_420px]">
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-port-accent/30 bg-port-accent/10 px-4 py-1.5 font-mono text-[0.75rem] tracking-[0.05em] text-port-accent2">
              <span className="hero-badge-dot h-1.5 w-1.5 shrink-0 rounded-full bg-port-accent3 shadow-[0_0_6px_var(--port-accent3)]" />
              {HERO_COPY.badge}
            </div>
            <h1 className="mb-5 font-display text-[clamp(2.8rem,5vw,4.2rem)] font-extrabold leading-[1.05] tracking-[-0.03em]">
              {PERSON.name}
              <br />
              <TypewriterRole />
            </h1>
            <p className="mb-8 max-w-[520px] text-[1.05rem] font-light leading-[1.7] text-port-text2">
              {HERO_COPY.description}
            </p>
            <div className="mb-12 flex flex-wrap gap-4">
              <Link
                href="#webprojects"
                className="rounded-lg bg-port-accent px-8 py-3 font-sans text-[0.9rem] font-semibold text-white no-underline shadow-[0_0_30px_rgba(91,106,240,0.4)] transition-all hover:-translate-y-0.5 hover:shadow-[0_0_45px_rgba(91,106,240,0.6)]"
              >
                View My Work
              </Link>
              <Link
                href="#contact"
                className="rounded-lg border border-port-border2 bg-transparent px-8 py-3 font-sans text-[0.9rem] font-medium text-port-text no-underline transition-all hover:border-port-accent hover:text-port-accent"
              >
                Get In Touch
              </Link>
            </div>
            <HeroStats />
          </Reveal>

          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
          >
            <HeroCodeCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
