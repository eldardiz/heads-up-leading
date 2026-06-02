"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const tags = [
  { label: "Faith-driven", top: "14%", left: "16%", rot: -6 },
  { label: "John Maxwell Certified", top: "8%", left: "60%", rot: 5 },
  { label: "West Point", top: "30%", left: "82%", rot: 8 },
  { label: "50+ years leading", top: "70%", left: "10%", rot: 5 },
  { label: "ICF Certified Coach", top: "82%", left: "44%", rot: -4 },
  { label: "Kolbe Certified", top: "66%", left: "78%", rot: 7 },
];

export function Statement() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-36">
      {/* floating tags */}
      {tags.map((t, i) => (
        <motion.span
          key={t.label}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease, delay: 0.1 + i * 0.08 }}
          className="float-tag hidden md:block"
          style={{ top: t.top, left: t.left, transform: `rotate(${t.rot}deg)` }}
        >
          {t.label}
        </motion.span>
      ))}

      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease }}
        className="font-display relative z-[2] mx-auto max-w-4xl text-center text-[clamp(2rem,5.5vw,4.25rem)] leading-[1.08] text-ink"
      >
        Sound principles and timeless practices always produce increase, in
        people and in business.
      </motion.h2>
    </section>
  );
}
