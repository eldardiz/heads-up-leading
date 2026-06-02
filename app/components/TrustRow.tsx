"use client";

const credentials = [
  "Certified John Maxwell Speaker, Trainer & Coach",
  "ICF Certified Coach",
  "Kolbe Certified Consultant",
  "West Point (USMA)",
  "EdD, Educational Leadership",
  "U.S. Army Officer (Ret.)",
  "27 Years in Christian Business Ministry",
];

export function TrustRow() {
  const row = [...credentials, ...credentials];

  return (
    <section className="relative z-10 border-y border-border bg-surface-2/60 py-7" aria-label="Credentials">
      <p className="mb-5 text-center text-[12px] uppercase tracking-[0.18em] text-text-faint">
        Trained, tested, and certified
      </p>
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="marquee-track flex w-max items-center gap-10 whitespace-nowrap">
          {row.map((c, i) => (
            <span key={i} className="flex items-center gap-10 text-[14.5px] text-text-dim">
              {c}
              <span className="text-accent-soft" aria-hidden>✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
