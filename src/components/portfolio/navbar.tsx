"use client";

import { Moon, Sun } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Exp" },
  { href: "#apps", label: "Apps" },
  { href: "#webprojects", label: "Web" },
  { href: "#projects", label: "Projects" },
  { href: "#websites", label: "Clients" },
  { href: "#contact", label: "Contact" },
];

function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <span
        className="h-9 w-9 shrink-0 rounded-md border border-port-border2 bg-port-surface"
        aria-hidden
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-port-border2 bg-port-chip text-port-text2 transition-colors hover:border-port-accent/40 hover:text-port-accent"
    >
      {isDark ? (
        <Sun className="h-4 w-4" strokeWidth={2} />
      ) : (
        <Moon className="h-4 w-4" strokeWidth={2} />
      )}
    </button>
  );
}

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-[100] flex items-center justify-between border-b border-port-border bg-port-bg/80 px-6 py-[1.1rem] backdrop-blur-xl md:px-12">
      <Link
        href="#"
        className="font-display text-[1.15rem] font-extrabold text-port-text no-underline"
      >
        Parash<span className="text-port-accent">.dev</span>
      </Link>
      <nav className="hidden md:block">
        <ul className="flex list-none gap-[1.8rem]">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="font-mono text-[0.72rem] font-medium uppercase tracking-[0.08em] text-port-text2 no-underline transition-colors hover:text-port-text"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center gap-2 sm:gap-3">
        <ThemeToggle />
        <Link
          href="#contact"
          className="rounded-md bg-port-accent px-[1.2rem] py-2 font-sans text-[0.8rem] font-semibold text-white no-underline transition-opacity hover:opacity-85"
        >
          Hire Me
        </Link>
      </div>
    </header>
  );
}
