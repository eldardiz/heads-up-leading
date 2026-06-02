"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export function Cta() {
  return (
    <section id="connect" className="scroll-mt-24 px-3 pb-3">
      <div className="block-dark relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden rounded-[34px] px-6 text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/cta.jpg"
          alt="Mountain valley path"
          className="absolute inset-0 z-0 h-full w-full object-cover"
        />
        <div
          className="pointer-events-none absolute inset-0 z-[1]"
          style={{ background: "rgba(20,16,11,0.52)" }}
          aria-hidden
        />
        <div className="relative z-[2] max-w-2xl">
          <motion.span
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2 rounded-full bg-cream/15 px-4 py-1.5 text-[13px] font-medium text-cream backdrop-blur-sm"
          >
            ✦ Connect · Sharpen · Grow
          </motion.span>
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease, delay: 0.06 }}
            className="font-display mt-6 text-cream text-[clamp(2.4rem,6vw,4.75rem)] leading-[1.02]"
          >
            Everyone deserves to be led well
          </motion.h2>
          <motion.p
            initial={{ y: 16, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease, delay: 0.14 }}
            className="mx-auto mt-5 max-w-md text-[16px] leading-[1.6] text-cream/75"
          >
            Whether you are stepping into your first leadership role or carrying
            the weight of a whole organization, you do not have to lead alone.
          </motion.p>
          <motion.div
            initial={{ y: 16, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease, delay: 0.2 }}
            className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"
          >
            <a href="mailto:gary@headsupleading.com" className="pill pill-light">
              Start a conversation
              <span aria-hidden>→</span>
            </a>
            <a href="#model" className="pill pill-ghost">
              Revisit the model
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
