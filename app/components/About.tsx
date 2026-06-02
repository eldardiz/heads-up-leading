"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const credentials = [
  "West Point (USMA)",
  "EdD, Dallas Baptist University",
  "John Maxwell Certified",
  "ICF Certified Coach",
  "Kolbe Certified Consultant",
  "U.S. Army Officer (Ret.)",
];

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="eyebrow">✦ The leader behind the model</span>
          <h2 className="font-display mt-6 text-[clamp(2.2rem,4.5vw,3.6rem)] leading-[1.06] text-ink">
            Five decades of leading people well
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1fr] lg:gap-16">
          {/* portrait slot */}
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease }}
            className="block-dark relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-[26px]"
          >
            <span className="slot-label">Portrait of Gary</span>
            <span className="font-display text-[110px] leading-none text-cream/85">GW</span>
          </motion.div>

          {/* bio */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ y: 16, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease, delay: 0.1 }}
              className="space-y-4 text-[16px] leading-[1.65] text-muted"
            >
              <p>
                Gary Wilson has spent his life leading people through pressure. A
                West Point graduate and retired U.S. Army officer, he led
                soldiers at every level, from a company in The Old Guard to a
                garrison in Korea to operations at corps level.
              </p>
              <p>
                He then gave 27 years to Christian business ministry, leading
                organizations of 175 to 5,000 people with budgets from two
                million to one hundred fifty million dollars. His last team
                delivered an eleven million dollar turnaround from 2017 to 2022,
                leading thousands through a pandemic that touched every part of
                the work.
              </p>
              <p className="text-ink">
                Today he trains new and struggling leaders to serve well, at
                home, in the community, and in business. The aim is simple: be a
                light, be salt, and raise up leaders of great character.
              </p>
            </motion.div>

            <motion.ul
              initial={{ y: 16, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease, delay: 0.18 }}
              className="mt-8 flex flex-wrap gap-2"
            >
              {credentials.map((c) => (
                <li
                  key={c}
                  className="rounded-full bg-sand px-3.5 py-1.5 text-[13px] text-ink/80"
                >
                  {c}
                </li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
}
