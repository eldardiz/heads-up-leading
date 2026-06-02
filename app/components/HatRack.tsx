"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const pillars = [
  {
    num: "01",
    icon: "♥",
    name: "Caring",
    question: "Do I care?",
    body: "Leadership begins with people. Caring leaders know the needs of those they serve and lead from genuine concern, never from position alone.",
  },
  {
    num: "02",
    icon: "✦",
    name: "Competent",
    question: "Can I help you?",
    body: "People read your competence as a measure of your caring. Sound principles and timeless practices produce real increase, in people and in business.",
  },
  {
    num: "03",
    icon: "◆",
    name: "Character",
    question: "Can you trust me?",
    body: "Trust is the foundation that holds everything else. Character is what lets a team follow you through pressure, change, and the long haul.",
  },
];

export function HatRack() {
  return (
    <section id="model" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-28">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        {/* sticky left */}
        <div className="lg:sticky lg:top-28 lg:h-fit">
          <span className="eyebrow">✦ The Hat Rack Leadership Model</span>
          <h2 className="font-display mt-6 text-[clamp(2.2rem,4.5vw,3.6rem)] leading-[1.06] text-ink">
            Every leader is measured by three questions
          </h2>
          <p className="mt-6 max-w-md text-[16px] leading-[1.6] text-muted">
            Refined over fifty years of leading organizations of two to three
            thousand people, the model answers the questions every person asks
            of the one who leads them. Live them, and you build a culture that
            sustains your vision over the long haul.
          </p>
        </div>

        {/* scrolling cards */}
        <div className="flex flex-col gap-5">
          {pillars.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ y: 26, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease, delay: i * 0.05 }}
              className="card-sand p-9"
            >
              <p className="text-[14px] text-muted">{p.num}</p>
              <div className="mt-7 flex h-12 w-12 items-center justify-center rounded-full bg-sand-deep text-[18px] text-espresso">
                {p.icon}
              </div>
              <h3 className="mt-7 text-[26px] font-semibold tracking-[-0.01em] text-ink">
                {p.name}
              </h3>
              <p className="font-display mt-1 text-[20px] italic text-espresso">
                {p.question}
              </p>
              <p className="mt-4 max-w-md text-[15.5px] leading-[1.6] text-muted">
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
