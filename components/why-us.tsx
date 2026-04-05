"use client";

import Image from "next/image";
import { useLocale } from "@/lib/i18n/locale-context";
import { t } from "@/lib/i18n/content";
import ElectricBorder from "@/components/ElectricBorder";

const icons = [
  // Saudi-Focused — map pin
  <svg key="saudi" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
    <circle cx="12" cy="9" r="2.5" />
  </svg>,
  // End-to-End — layers
  <svg key="e2e" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </svg>,
  // Reliable Support — headset
  <svg key="support" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3v5z" />
    <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3v5z" />
  </svg>,
  // Results-Driven — trending up
  <svg key="results" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
    <polyline points="16 7 22 7 22 13" />
  </svg>,
];

const features = {
  en: [
    ["Local market expertise", "Arabic-first approach", "KSA regulations"],
    ["Design + Dev + Marketing", "Single point of contact"],
    ["Rapid response", "Proactive monitoring"],
    ["Analytics-driven", "Conversion optimization", "Transparent reporting"],
  ],
  ar: [
    ["خبرة بالسوق المحلي", "أولوية اللغة العربية", "أنظمة المملكة"],
    ["تصميم + تطوير + تسويق", "نقطة تواصل واحدة"],
    ["استجابة سريعة", "مراقبة استباقية"],
    ["مبنية على البيانات", "تحسين التحويلات", "تقارير شفافة"],
  ],
};

export default function WhyUs() {
  const { locale, dir } = useLocale();
  const whyUs = t("whyUs", locale);
  const featureList = features[locale];

  return (
    <section id="about" dir={dir} className="relative overflow-hidden py-24 sm:py-32">
      {/* Decorative brand element */}
      <div className="pointer-events-none absolute top-0 right-0 opacity-[0.04]">
        <Image
          src="/brandings/brand-element.svg"
          alt=""
          width={300}
          height={480}
          aria-hidden="true"
        />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-20 flex flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
            {whyUs.heading}
          </h2>
          <Image
            src="/brandings/logo-full.svg"
            alt="Taqneo"
            width={220}
            height={78}
            className="mt-2"
          />
        </div>

        {/* Bento grid — equal rows, no row-span-2 */}
        <div className="grid gap-4 sm:grid-cols-2">
          {whyUs.items.map((item, i) => (
            <ElectricBorder
              key={i}
              color="#8BDFD7"
              speed={0.4}
              chaos={0.06}
              borderRadius={16}
              className=""
              style={{}}
            >
              <div className="flex h-full flex-col justify-between rounded-2xl p-8 sm:p-10">
                {/* Top: Icon + Stat */}
                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-neo-teal/10 text-neo-teal">
                    {icons[i]}
                  </div>
                  <span className="text-6xl font-black tracking-tighter text-neo-teal/20 lg:text-7xl">
                    {item.stat}
                  </span>
                </div>

                {/* Bottom: Text content */}
                <div className="mt-6">
                  <h3 className="text-xl font-bold text-foreground sm:text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {item.description}
                  </p>

                  {/* Feature tags */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {featureList[i].map((feat, j) => (
                      <span
                        key={j}
                        className="rounded-full border border-neo-teal/20 bg-neo-teal/5 px-3 py-1 text-xs font-medium text-neo-teal"
                      >
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ElectricBorder>
          ))}
        </div>
      </div>
    </section>
  );
}
