"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export function Connect() {
  return (
    <section id="connect" className="relative z-10 scroll-mt-24 border-t border-border py-28">
      <div className="hero-glow" aria-hidden style={{ top: "auto", bottom: "-30%" }} />
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <motion.span
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease }}
          className="kicker"
        >
          Connect · Sharpen · Grow
        </motion.span>
        <motion.h2
          initial={{ y: 18, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease, delay: 0.05 }}
          className="mt-4 font-display text-[clamp(2.2rem,5vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.02em] text-foreground"
        >
          Everyone deserves to be led well.
        </motion.h2>
        <motion.p
          initial={{ y: 16, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease, delay: 0.12 }}
          className="mx-auto mt-5 max-w-xl text-[17px] leading-[1.6] text-text-dim"
        >
          Whether you are stepping into your first leadership role or carrying
          the weight of an entire organization, you do not have to lead alone.
        </motion.p>
        <motion.div
          initial={{ y: 16, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease, delay: 0.2 }}
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a
            href="mailto:gary@headsupleading.com"
            className="btn-ink inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-medium"
          >
            Start a conversation
            <span aria-hidden>→</span>
          </a>
          <a
            href="#model"
            className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface px-7 py-3.5 text-[15px] font-medium text-foreground transition-colors hover:bg-surface-2"
          >
            Revisit the model
          </a>
        </motion.div>
      </div>
    </section>
  );
}
