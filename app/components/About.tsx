"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const credentials = [
  "West Point (USMA)",
  "EdD, Dallas Baptist University",
  "Certified John Maxwell Speaker, Trainer & Coach",
  "ICF Certified Coach",
  "Kolbe Certified Consultant",
  "U.S. Army Officer (Ret.)",
];

export function About() {
  return (
    <section id="about" className="relative z-10 scroll-mt-24 py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-[0.85fr_1fr] lg:gap-16">
        {/* portrait placeholder */}
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease }}
          className="grain relative aspect-[4/5] overflow-hidden rounded-2xl border border-border"
          style={{
            background:
              "linear-gradient(160deg, #F4F0E8 0%, #E9E1D1 55%, #DCD0B8 100%)",
          }}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="font-display text-[88px] font-medium leading-none text-accent-deep/70">
              GW
            </span>
            <span className="mt-3 text-[12px] uppercase tracking-[0.18em] text-text-faint">
              Portrait placeholder
            </span>
          </div>
        </motion.div>

        {/* bio */}
        <div className="flex flex-col justify-center">
          <motion.span
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease }}
            className="kicker"
          >
            Meet Gary Wilson
          </motion.span>
          <motion.h2
            initial={{ y: 18, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease, delay: 0.05 }}
            className="mt-4 font-display text-[clamp(2rem,4.5vw,3rem)] font-medium leading-[1.08] tracking-[-0.02em] text-foreground"
          >
            Five decades of leading people well.
          </motion.h2>

          <motion.div
            initial={{ y: 16, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease, delay: 0.12 }}
            className="mt-6 space-y-4 text-[16px] leading-[1.65] text-text-dim"
          >
            <p>
              Gary has spent his life leading people through pressure. A West
              Point graduate and retired U.S. Army officer, he led soldiers at
              every level, from a company in The Old Guard to a garrison in
              Korea to operations at corps level.
            </p>
            <p>
              He then gave 27 years to Christian business ministry, leading
              organizations of 175 to 5,000 people with budgets from two million
              to one hundred fifty million dollars. His last team delivered an
              eleven million dollar turnaround from 2017 to 2022, leading
              thousands through a pandemic that touched every part of the work.
            </p>
            <p className="text-foreground">
              Today he trains new and struggling leaders to serve well, at home,
              in the community, and in business. The aim is simple: be a light,
              be salt, and raise up leaders of great character.
            </p>
          </motion.div>

          <motion.ul
            initial={{ y: 16, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-2"
          >
            {credentials.map((c) => (
              <li
                key={c}
                className="rounded-full border border-border bg-surface px-3.5 py-1.5 text-[13px] text-text-dim"
              >
                {c}
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
