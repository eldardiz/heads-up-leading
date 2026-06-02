"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-24">
      <div className="hero-glow" aria-hidden />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
        {/* eyebrow */}
        <motion.div
          initial={{ y: 8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease, delay: 0.1 }}
          className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-border bg-surface/70 px-4 py-1.5 backdrop-blur-sm"
        >
          <span className="inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
          <span className="kicker">The Hat Rack Leadership Model</span>
        </motion.div>

        {/* headline */}
        <motion.h1
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.85, ease, delay: 0.15 }}
          className="font-display text-balance text-[clamp(2.6rem,6.5vw,5rem)] font-medium leading-[1.02] tracking-[-0.02em] text-foreground"
        >
          Helping the new leader{" "}
          <span className="italic text-accent-deep">lead well.</span>
        </motion.h1>

        {/* subhead */}
        <motion.p
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease, delay: 0.3 }}
          className="mt-7 max-w-2xl text-balance text-[18px] leading-[1.6] text-text-dim"
        >
          Everything rises and falls on leadership. Gary Wilson trains new and
          struggling leaders to serve with clarity, competence, and character,
          at home, in the community, and in business.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease, delay: 0.45 }}
          className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a
            href="#connect"
            className="btn-ink inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-medium"
          >
            Book Gary to speak
            <span aria-hidden>→</span>
          </a>
          <a
            href="#model"
            className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface px-7 py-3.5 text-[15px] font-medium text-foreground transition-colors hover:bg-surface-2"
          >
            Explore the model
          </a>
        </motion.div>

        {/* role line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease, delay: 0.7 }}
          className="mt-8 text-[13px] tracking-[0.04em] text-text-faint"
        >
          Keynote Speaker · Executive Coach · Certified John Maxwell Trainer
        </motion.p>
      </div>
    </section>
  );
}
