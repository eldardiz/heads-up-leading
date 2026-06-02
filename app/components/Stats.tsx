"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

type Stat = {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
};

const stats: Stat[] = [
  { value: 50, suffix: "+", label: "Years leading people, in uniform and in business" },
  { value: 3000, suffix: "+", label: "Largest organization led, start to finish" },
  { value: 11, prefix: "$", suffix: "M", label: "Turnaround delivered, 2017 to 2022" },
  { value: 27, suffix: " yrs", label: "Leading in Christian business ministry" },
];

function CountUp({ value, prefix = "", suffix = "" }: Stat) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    let start = 0;
    const duration = 1400;
    const step = (t: number) => {
      if (!start) start = t;
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {prefix}
      {n.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="relative z-10 mx-auto max-w-6xl px-6 py-24">
      <div className="grid grid-cols-1 gap-y-12 gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ y: 18, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease, delay: i * 0.08 }}
            className="text-center sm:text-left"
          >
            <div className="font-display text-[clamp(2.6rem,5vw,3.6rem)] font-medium leading-none tracking-[-0.02em] text-foreground">
              <CountUp {...s} />
            </div>
            <p className="mt-3 text-[14px] leading-[1.5] text-text-dim">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
