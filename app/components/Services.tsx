"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const services = [
  {
    title: "Keynote Speaking",
    body: "Talks that move individuals, associations, and businesses toward leading well, on leadership, the Hat Rack Model, communication, growth, and team development.",
  },
  {
    title: "Executive & Business Coaching",
    body: "One on one coaching for new and struggling leaders who want to grow. ICF certified, John Maxwell certified, and Kolbe informed.",
  },
  {
    title: "Team & Leadership Development",
    body: "Organize your team around a single leadership model and grow key leaders in the competencies that drive performance.",
  },
  {
    title: "Non-profit Consulting",
    body: "Decades leading mission-driven organizations through growth, turnaround, and change, spiritually, functionally, and financially.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative z-10 scroll-mt-24 bg-surface-2/50 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <motion.span
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease }}
            className="kicker"
          >
            Ways to work together
          </motion.span>
          <motion.h2
            initial={{ y: 18, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease, delay: 0.05 }}
            className="mt-4 font-display text-[clamp(2rem,4.5vw,3.25rem)] font-medium leading-[1.08] tracking-[-0.02em] text-foreground"
          >
            Leadership that holds up under pressure.
          </motion.h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ y: 22, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease, delay: i * 0.08 }}
              className="card card-hover flex flex-col p-8"
            >
              <span className="font-display text-[14px] text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-[24px] font-medium tracking-[-0.01em] text-foreground">
                {s.title}
              </h3>
              <p className="mt-3 text-[15px] leading-[1.6] text-text-dim">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
