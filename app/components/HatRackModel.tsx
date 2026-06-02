"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const pillars = [
  {
    num: "01",
    name: "Caring",
    question: "Do I care?",
    body: "Leadership begins with people. Caring leaders know the needs of those they serve and lead from genuine concern, not position.",
  },
  {
    num: "02",
    name: "Competent",
    question: "Can I help you?",
    body: "People read your competence as a measure of your caring. Sound principles and timeless practices produce real increase in people and in business.",
  },
  {
    num: "03",
    name: "Character",
    question: "Can you trust me?",
    body: "Trust is the foundation that holds everything else. Character is what lets a team follow you through pressure, change, and the long haul.",
  },
];

export function HatRackModel() {
  return (
    <section id="model" className="relative z-10 scroll-mt-24 border-t border-border py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* header */}
        <div className="max-w-2xl">
          <motion.span
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease }}
            className="kicker"
          >
            The Hat Rack Leadership Model
          </motion.span>
          <motion.h2
            initial={{ y: 18, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease, delay: 0.05 }}
            className="mt-4 font-display text-[clamp(2rem,4.5vw,3.25rem)] font-medium leading-[1.08] tracking-[-0.02em] text-foreground"
          >
            Every leader is measured by three questions.
          </motion.h2>
          <motion.p
            initial={{ y: 16, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease, delay: 0.12 }}
            className="mt-5 text-[17px] leading-[1.6] text-text-dim"
          >
            Refined over fifty years of leading organizations of two to three
            thousand people, the Hat Rack Leadership Model answers the questions
            every person asks of the one who leads them.
          </motion.p>
        </div>

        {/* pillars */}
        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {pillars.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ y: 22, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease, delay: i * 0.1 }}
              className="card card-hover flex flex-col p-8"
            >
              <span className="font-display text-[15px] text-accent">{p.num}</span>
              <h3 className="mt-5 font-display text-[26px] font-medium tracking-[-0.01em] text-foreground">
                {p.name}
              </h3>
              <p className="mt-1 text-[15px] italic text-accent-deep">{p.question}</p>
              <p className="mt-4 text-[15px] leading-[1.6] text-text-dim">{p.body}</p>
            </motion.div>
          ))}
        </div>

        {/* closing line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease, delay: 0.2 }}
          className="mt-12 max-w-2xl text-[18px] leading-[1.55] text-foreground"
        >
          <span className="font-display italic">
            As a Hat Rack leader, you build a culture that sustains your vision
            over the long haul.
          </span>
        </motion.p>
      </div>
    </section>
  );
}
