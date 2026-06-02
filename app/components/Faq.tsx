"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const faqs = [
  {
    q: "What is the Hat Rack Leadership Model?",
    a: "It is a leadership framework Gary refined over fifty years of leading organizations. It answers the three questions every person asks of the one who leads them: do you care, can you help, and can you be trusted. Caring, competence, and character.",
  },
  {
    q: "Who do you work with?",
    a: "New and struggling leaders, established executives, business owners, teams, associations, and non-profit and ministry organizations. Gary speaks to individuals and groups of every size.",
  },
  {
    q: "Is the work faith-based?",
    a: "Gary leads from a Christian foundation and works comfortably with both faith-driven and secular organizations. The leadership principles apply in any context, at home, in the community, and in business.",
  },
  {
    q: "Do you speak at events and conferences?",
    a: "Yes. Keynotes and trainings on leadership, the Hat Rack Model, communication, growth, and team development, for businesses, associations, churches, and non-profits.",
  },
  {
    q: "Do you coach individuals or whole teams?",
    a: "Both. One on one executive coaching for leaders who want to grow, and team development that organizes a whole group around a single, shared leadership model.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="mx-auto max-w-3xl px-6 py-28">
      <div className="mb-10 text-center">
        <span className="eyebrow">✦ Questions, answered</span>
        <h2 className="font-display mt-6 text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.08] text-ink">
          Good to know before we talk
        </h2>
      </div>

      <div className="space-y-3">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q} className="rounded-[20px] bg-sand px-6">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
              >
                <span className="text-[16.5px] font-medium text-ink">{f.q}</span>
                <span
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sand-deep text-[18px] text-espresso transition-transform duration-300"
                  style={{ transform: isOpen ? "rotate(45deg)" : "none" }}
                  aria-hidden
                >
                  +
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 pr-10 text-[15px] leading-[1.6] text-muted">
                      {f.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
