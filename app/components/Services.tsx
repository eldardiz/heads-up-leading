"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const services = [
  {
    title: "Keynote Speaking",
    body: "Talks that move individuals, associations, and businesses toward leading well, on leadership, communication, growth, and team development.",
  },
  {
    title: "Executive & Business Coaching",
    body: "One on one coaching for new and struggling leaders who want to grow. ICF certified, John Maxwell certified, Kolbe informed.",
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
    <section id="services" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-28">
      <div className="max-w-2xl">
        <span className="eyebrow">✦ Ways to work together</span>
        <h2 className="font-display mt-6 text-[clamp(2.2rem,4.5vw,3.6rem)] leading-[1.06] text-ink">
          Leadership tailored to where you lead
        </h2>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
        {services.map((s, i) => (
          <motion.a
            key={s.title}
            href="#connect"
            initial={{ y: 26, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease, delay: (i % 2) * 0.08 }}
            className="block-dark group relative flex min-h-[300px] flex-col justify-end overflow-hidden rounded-[26px] p-8"
          >
            <span className="slot-label">Photo</span>
            <div
              className="pointer-events-none absolute inset-0 z-[1]"
              style={{
                background:
                  "linear-gradient(180deg, rgba(20,16,11,0.1) 0%, rgba(20,16,11,0) 40%, rgba(20,16,11,0.6) 100%)",
              }}
              aria-hidden
            />
            <div className="relative z-[2]">
              <h3 className="text-[24px] font-semibold tracking-[-0.01em] text-cream">
                {s.title}
              </h3>
              <p className="mt-2 max-w-md text-[14.5px] leading-[1.55] text-cream/75">
                {s.body}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-[13.5px] font-medium text-cream/90">
                Learn more
                <span className="transition-transform group-hover:translate-x-0.5" aria-hidden>→</span>
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
