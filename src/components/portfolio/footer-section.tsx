"use client";

import { PERSON } from "@/data/portfolio";

export function FooterSection() {
  const year = new Date().getFullYear();
  return (
    <footer className="flex flex-col items-center justify-between gap-4 border-t border-port-border bg-port-bg px-8 py-8 md:flex-row md:px-12">
      <div className="font-display text-[0.95rem] font-extrabold">
        Parash<span className="text-port-accent">.dev</span>
      </div>
      <p className="text-center font-mono text-[0.73rem] text-port-text3">
        © {year} {PERSON.name} · {PERSON.location} · Full Stack & Mobile
        Developer
      </p>
    </footer>
  );
}
