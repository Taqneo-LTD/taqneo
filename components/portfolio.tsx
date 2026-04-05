"use client";

import Image from "next/image";
import { useLocale } from "@/lib/i18n/locale-context";
import { t } from "@/lib/i18n/content";
import { Button } from "@/components/ui/button";

export default function Portfolio() {
  const { locale, dir } = useLocale();
  const portfolio = t("portfolio", locale);

  return (
    <section id="portfolio" dir={dir} className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
            {portfolio.heading}{" "}
            <span
              className="text-neo-teal"
              style={{ fontFamily: "var(--font-basmala)" }}
            >
              {portfolio.headingAccent}
            </span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            {portfolio.subtitle}
          </p>
        </div>

        {/* Projects */}
        <div className="flex flex-col gap-8">
          {portfolio.items.map((project, i) => {
            const isReversed = i % 2 !== 0;

            return (
              <div
                key={i}
                className={`group relative grid items-center gap-8 overflow-hidden rounded-2xl border border-border/40 bg-card/30 transition-all duration-500 hover:border-neo-teal/20 md:grid-cols-2 ${
                  isReversed ? "md:direction-rtl" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`relative aspect-video overflow-hidden ${
                    isReversed ? "md:order-2" : ""
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                  {/* Gradient fade into content */}
                  <div
                    className={`absolute inset-0 ${
                      isReversed
                        ? "bg-gradient-to-l from-transparent via-transparent to-background/80 max-md:bg-gradient-to-t max-md:from-background/60 max-md:via-transparent"
                        : "bg-gradient-to-r from-transparent via-transparent to-background/80 max-md:bg-gradient-to-t max-md:from-background/60 max-md:via-transparent"
                    }`}
                  />
                </div>

                {/* Content */}
                <div
                  className={`flex flex-col gap-4 p-8 sm:p-10 ${
                    isReversed ? "md:order-1" : ""
                  }`}
                  dir={dir}
                >
                  {/* Type + Category badges */}
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-neo-teal/10 px-3 py-1 text-xs font-semibold text-neo-teal">
                      {project.type}
                    </span>
                    <span className="rounded-full border border-border/60 px-3 py-1 text-xs font-medium text-muted-foreground">
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {project.description}
                  </p>

                  {/* CTA */}
                  <div className="mt-2">
                    <Button
                      asChild
                      variant="outline"
                      className="group/btn rounded-full px-6"
                    >
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2"
                      >
                        {portfolio.viewProject}
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 16 16"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                        >
                          <path d="M4 12L12 4M12 4H5M12 4V11" />
                        </svg>
                      </a>
                    </Button>
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
