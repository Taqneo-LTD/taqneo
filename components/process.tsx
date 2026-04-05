"use client";

import { useLocale } from "@/lib/i18n/locale-context";
import { t } from "@/lib/i18n/content";
import Image from "next/image";

const stepIcons = [
  // Discovery — search/compass
  <svg key="discover" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" />
  </svg>,
  // Strategy — target
  <svg key="strategy" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>,
  // Execution — rocket
  <svg key="execute" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </svg>,
  // Growth — trending up
  <svg key="growth" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
    <polyline points="16 7 22 7 22 13" />
  </svg>,
];

export default function Process() {
  const { locale, dir } = useLocale();
  const process = t("process", locale);

  return (
    <section dir={dir} className="relative overflow-hidden py-24 sm:py-32">
      {/* Decorative brand element */}
      <div className="pointer-events-none absolute bottom-0 left-0 -scale-x-100 opacity-[0.03]">
        <Image
          src="/brandings/brand-element.svg"
          alt=""
          width={250}
          height={400}
          aria-hidden="true"
        />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-20 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
            {process.heading}{" "}
            <span
              className="text-neo-teal"
              style={{ fontFamily: "var(--font-basmala)" }}
            >
              {process.headingAccent}
            </span>
          </h2>
        </div>

        {/* Steps — horizontal on desktop, vertical on mobile */}
        <div className="relative grid gap-0 sm:grid-cols-4">
          {/* Connector line — horizontal on desktop */}
          <div className="pointer-events-none absolute top-[52px] hidden h-px w-full bg-gradient-to-r from-transparent via-neo-teal/30 to-transparent sm:block" />

          {/* Connector line — vertical on mobile */}
          <div className="pointer-events-none absolute top-0 left-[27px] block h-full w-px bg-gradient-to-b from-transparent via-neo-teal/30 to-transparent sm:hidden rtl:left-auto rtl:right-[27px]" />

          {process.steps.map((step, i) => (
            <div key={i} className="group relative flex gap-5 py-6 sm:flex-col sm:items-center sm:gap-0 sm:py-0 sm:text-center">
              {/* Number circle */}
              <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-neo-teal/30 bg-background text-neo-teal transition-all duration-500 group-hover:border-neo-teal group-hover:bg-neo-teal/10">
                {stepIcons[i]}
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2 sm:mt-8 sm:px-4">
                {/* Step number */}
                <span className="text-xs font-bold tracking-widest text-neo-teal/50">
                  {step.num}
                </span>

                {/* Title */}
                <h3 className="text-lg font-bold text-foreground sm:text-xl">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
