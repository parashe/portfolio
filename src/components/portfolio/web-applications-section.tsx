"use client";

import type { WebAppProject } from "@/data/portfolio";
import {
  PERSONAL_PROJECTS,
  PERSONAL_PROJECTS_INTRO,
  WEB_APPLICATIONS,
} from "@/data/portfolio";
import Link from "next/link";
import { useState } from "react";
import { Reveal } from "./reveal";

/** Cards visible before "See more" — 6 = two full rows on `lg:grid-cols-3`. */
const PERSONAL_PROJECTS_PREVIEW = 6;

function ProjectCard({
  p,
  delay = 0,
}: {
  p: WebAppProject;
  delay?: number;
}) {
  const showGithub =
    p.githubUrl &&
    (p.githubUrl.startsWith("http://") || p.githubUrl.startsWith("https://"));
  const showLive =
    p.liveUrl &&
    (p.liveUrl.startsWith("http://") || p.liveUrl.startsWith("https://"));

  return (
    <Reveal delay={delay}>
      <article className="flex h-full flex-col overflow-hidden rounded-[14px] border border-port-border bg-port-surface transition-all hover:-translate-y-1 hover:border-port-accent/30 hover:shadow-[0_20px_40px_rgba(15,17,24,0.12)] dark:hover:shadow-[0_24px_48px_rgba(0,0,0,0.4)]">
        <div
          className="relative flex h-[130px] items-center justify-center text-[2.3rem] opacity-55"
          style={{ background: p.gradient }}
        >
          {p.emoji}
          <span className="absolute bottom-2.5 left-3 font-mono text-[0.6rem] uppercase tracking-[0.1em] text-port-text3">
            {p.label}
          </span>
          <span className="absolute right-3 top-3 rounded border border-port-border2 bg-black/45 px-2 py-0.5 font-mono text-[0.6rem] text-port-text3">
            {p.badge}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-5">
          <h3 className="mb-2 font-display text-[0.92rem] font-bold">
            {p.title}
          </h3>
          <p className="flex-1 text-[0.78rem] font-light leading-[1.5] text-port-text2">
            {p.description}
          </p>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-3 border-t border-port-border pt-4">
            <div className="flex flex-wrap gap-1.5">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="rounded border border-port-border bg-port-chip px-2 py-0.5 font-mono text-[0.6rem] text-port-text3"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              {showGithub ? (
                <Link
                  href={p.githubUrl!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 font-mono text-[0.7rem] text-port-text2 no-underline transition-opacity hover:text-port-accent hover:opacity-90"
                >
                  GitHub
                </Link>
              ) : null}
              {showLive ? (
                <Link
                  href={p.liveUrl!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 font-mono text-[0.7rem] text-port-accent no-underline transition-opacity hover:opacity-70"
                >
                  View demo →
                </Link>
              ) : null}
              {p.privateLabel ? (
                <span className="rounded-md border border-port-accent4/20 bg-port-accent4/[0.08] px-1.5 py-0.5 font-mono text-[0.58rem] text-port-accent4">
                  {p.privateLabel}
                </span>
              ) : null}
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export function WebApplicationsSection() {
  const [personalExpanded, setPersonalExpanded] = useState(false);
  const personalToShow = personalExpanded
    ? PERSONAL_PROJECTS
    : PERSONAL_PROJECTS.slice(0, PERSONAL_PROJECTS_PREVIEW);
  const hasMorePersonal =
    PERSONAL_PROJECTS.length > PERSONAL_PROJECTS_PREVIEW;

  return (
    <section id="webprojects" className="bg-port-bg2 py-20 md:py-28">
      <div className="container mx-auto max-w-[1100px] px-8">
        <Reveal>
          <p className="mb-3 font-mono text-[0.72rem] uppercase tracking-[0.15em] text-port-accent">
            {"// web applications"}
          </p>
          <h2 className="mb-3 font-display text-[clamp(1.8rem,3vw,2.6rem)] font-extrabold tracking-[-0.02em]">
            Full-stack web apps
          </h2>
          <p className="max-w-[560px] text-[1rem] font-light leading-[1.7] text-port-text2">
            Complex systems designed, developed and deployed end-to-end.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WEB_APPLICATIONS.map((p, i) => (
            <ProjectCard key={p.id} p={p} delay={0.05 * (i + 1)} />
          ))}
        </div>

        <div
          id="projects"
          className="mt-20 scroll-mt-24 border-t border-port-border pt-16 md:scroll-mt-28 md:pt-20"
        >
          <Reveal>
            <p className="mb-3 font-mono text-[0.72rem] uppercase tracking-[0.15em] text-port-accent">
              {PERSONAL_PROJECTS_INTRO.kicker}
            </p>
            <h2 className="mb-3 font-display text-[clamp(1.6rem,2.5vw,2.2rem)] font-extrabold tracking-[-0.02em]">
              {PERSONAL_PROJECTS_INTRO.title}
            </h2>
            <p className="max-w-[640px] text-[0.95rem] font-light leading-[1.7] text-port-text2">
              {PERSONAL_PROJECTS_INTRO.note}
            </p>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {personalToShow.map((p, i) => (
              <ProjectCard key={p.id} p={p} delay={0.03 * (i + 1)} />
            ))}
          </div>
          {hasMorePersonal ? (
            <div className="mt-10 flex justify-center">
              <button
                type="button"
                onClick={() => setPersonalExpanded((v) => !v)}
                className="rounded-lg border border-port-border2 bg-port-chip px-6 py-2.5 font-mono text-[0.8rem] font-medium text-port-text2 transition-colors hover:border-port-accent/40 hover:text-port-accent"
              >
                {personalExpanded ? "See less" : "See more"}
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
