"use client";

import { useState } from "react";
import Image from "next/image";
import { useLocale } from "@/lib/i18n/locale-context";
import { t } from "@/lib/i18n/content";

const serviceImages = [
  "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=300&fit=crop&q=80",
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop&q=80",
  "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=400&h=300&fit=crop&q=80",
  "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=400&h=300&fit=crop&q=80",
  "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=300&fit=crop&q=80",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&q=80",
];

export default function Services() {
  const { locale, dir } = useLocale();
  const services = t("services", locale);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="services" dir={dir} className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-full px-6">
        {/* Section header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
            {locale === "en" ? (
              <>
                Our Agency Provides These
                <br />
                <span
                  className="text-neo-teal mt-8 block"
                  style={{ fontFamily: "var(--font-basmala)" }}
                >
                  Services
                </span>
              </>
            ) : (
              <>
                وكالتنا تقدّم هذه
                <br />
                <span
                  className="text-neo-teal mt-8 block"
                  style={{ fontFamily: "var(--font-basmala)" }}
                >
                  الخدمات
                </span>
              </>
            )}
          </h2>
        </div>

        {/* Services list */}
        <div className="flex flex-col">
          {services.items.map((item, i) => {
            const isActive = activeIndex === i;
            const num = String(i + 1).padStart(2, "0");

            return (
              <div
                key={i}
                onMouseEnter={() => setActiveIndex(i)}
                onMouseLeave={() => setActiveIndex(null)}
                className={`group relative cursor-pointer border-t border-border/40 last:border-b transition-colors duration-300 ${
                  isActive ? "bg-neo-teal/10" : ""
                }`}
              >
                <div className="flex items-center gap-4 px-4 py-6 sm:gap-8 sm:px-6 sm:py-8 md:gap-12 md:px-8">
                  {/* Number */}
                  <span
                    className={`shrink-0 text-xs font-medium tabular-nums transition-colors duration-300 sm:text-sm ${
                      isActive ? "text-neo-teal" : "text-muted-foreground/50"
                    }`}
                  >
                    {num}
                  </span>

                  {/* Title — flexible on mobile, fixed min on desktop */}
                  <h3
                    className={`flex-1 text-base font-bold uppercase tracking-wide transition-colors duration-300 sm:flex-none sm:min-w-50 sm:text-2xl md:text-3xl ${
                      isActive ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {item.title}
                  </h3>

                  {/* Description — hidden on mobile */}
                  <p
                    className={`hidden flex-1 text-sm leading-relaxed transition-colors duration-300 md:block ${
                      isActive
                        ? "text-foreground/80"
                        : "text-muted-foreground/60"
                    } ${locale === "en" ? "text-right" : "text-left"}`}
                  >
                    {item.description}
                  </p>

                  {/* Arrow button */}
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 sm:h-12 sm:w-12 ${
                      isActive
                        ? "border-neo-teal bg-neo-teal text-background"
                        : "border-border/60 text-muted-foreground"
                    }`}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="sm:h-4 sm:w-4"
                    >
                      <path d="M4 12L12 4M12 4H5M12 4V11" />
                    </svg>
                  </div>
                </div>

                {/* Mobile/tablet description — visible below md */}
                <p
                  className={`px-4 pb-5 text-sm leading-relaxed md:hidden ${
                    isActive
                      ? "text-foreground/80"
                      : "text-muted-foreground/60"
                  }`}
                >
                  {item.description}
                </p>

                {/* Hover image — appears in center of row */}
                <div
                  className={`pointer-events-none absolute top-1/2 left-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 transition-all duration-500 sm:block ${
                    isActive
                      ? "scale-100 -rotate-6 opacity-100"
                      : "scale-75 rotate-0 opacity-0"
                  }`}
                >
                  <div className="overflow-hidden rounded-xl border-2 border-neo-teal/30 shadow-2xl shadow-neo-teal/10">
                    <Image
                      src={serviceImages[i]}
                      alt={item.title}
                      width={220}
                      height={160}
                      className="h-35 w-50 object-cover"
                      unoptimized
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
