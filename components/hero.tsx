"use client";

import Image from "next/image";
import { useLocale } from "@/lib/i18n/locale-context";
import { t } from "@/lib/i18n/content";
import { Button } from "@/components/ui/button";
import MagicRings from "@/components/MagicRings";

export default function Hero() {
  const { locale, dir } = useLocale();
  const hero = t("hero", locale);

  return (
    <section
      dir={dir}
      className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden"
    >
      {/* MagicRings background */}
      <div className="pointer-events-auto absolute inset-0">
        <MagicRings
          color="#3FBFFF"
          colorTwo="#9BFF37"
          speed={0.6}
          ringCount={5}
          attenuation={8}
          lineThickness={2.5}
          baseRadius={0.25}
          radiusStep={0.12}
          scaleRate={0.15}
          opacity={0.7}
          blur={1}
          noiseAmount={0.04}
          rotation={-15}
          ringGap={1.4}
          fadeIn={0.8}
          fadeOut={0.6}
          followMouse
          mouseInfluence={0.15}
          hoverScale={1.1}
          parallax={0.04}
          clickBurst
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        {/* KSA Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/60 px-4 py-1.5 backdrop-blur-sm">
          <Image
            src="/flags/sa.svg"
            alt="Saudi Arabia"
            width={20}
            height={15}
            className="rounded-sm object-center"
          />
          <span className="text-xs font-medium text-muted-foreground">
            {hero.badge}
          </span>
        </div>

        {/* Tagline */}
        <p
          className="mb-4 text-sm font-medium tracking-widest uppercase text-neo-teal"
        >
          {hero.tagline}
        </p>

        {/* Headline */}
        <h1 className="mx-auto max-w-3xl text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          {locale === "en" ? (
            <>
              We Build Digital Experiences
              <br />
              <span
                className="text-neo-teal mt-6 block"
                style={{ fontFamily: "var(--font-basmala)" }}
              >
                That Grow Your Business
              </span>
            </>
          ) : (
            <>
              نبني تجارب رقمية
              <br />
              <span
                className="text-neo-teal"
                style={{ fontFamily: "var(--font-basmala)" }}
              >
                تنمّي أعمالك
              </span>
            </>
          )}
        </h1>

        {/* Subtext */}
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {hero.subtext}
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="h-12 rounded-full bg-neo-teal px-8 text-sm font-semibold text-background hover:bg-neo-teal/80"
          >
            <a href="#contact">{hero.cta1}</a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="h-12 rounded-full px-8 text-sm font-semibold"
          >
            <a href="#portfolio">{hero.cta2}</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
