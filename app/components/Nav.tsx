"use client";

import { motion } from "framer-motion";

const links = [
  { label: "The Model", href: "#model" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
];

export function Nav() {
  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[min(1100px,calc(100%-2rem))]"
    >
      <div className="flex items-center justify-between rounded-full border border-border bg-[rgba(255,255,255,0.72)] backdrop-blur-xl pl-5 pr-2 py-2 shadow-[0_8px_30px_-18px_rgba(27,24,19,0.25)]">
        <a href="#" className="flex items-baseline gap-2">
          <span className="font-display text-[19px] font-semibold tracking-[-0.01em] text-foreground">
            Heads Up Leading
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-[13.5px] text-text-dim">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#connect"
          className="btn-ink inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[13.5px] font-medium"
        >
          Book Gary
          <span aria-hidden>→</span>
        </a>
      </div>
    </motion.header>
  );
}
