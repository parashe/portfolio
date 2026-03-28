"use client";

import { TYPEWRITER_ROLES } from "@/data/portfolio";
import { useEffect, useState } from "react";

export function TypewriterRole() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = TYPEWRITER_ROLES[roleIndex];
    const speed = deleting ? 50 : 90;

    const t = window.setTimeout(() => {
      if (!deleting) {
        if (display.length < full.length) {
          setDisplay(full.slice(0, display.length + 1));
        } else {
          window.setTimeout(() => setDeleting(true), 1800);
        }
      } else {
        if (display.length > 0) {
          setDisplay(full.slice(0, display.length - 1));
        } else {
          setDeleting(false);
          setRoleIndex((i) => (i + 1) % TYPEWRITER_ROLES.length);
        }
      }
    }, speed);

    return () => window.clearTimeout(t);
  }, [display, deleting, roleIndex]);

  return (
    <span className="text-gradient-port inline-block min-h-[1.1em]">
      {display}
    </span>
  );
}
