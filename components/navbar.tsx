"use client";

import Image from "next/image";
import { useLocale } from "@/lib/i18n/locale-context";
import { t } from "@/lib/i18n/content";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const { locale, dir, toggleLocale } = useLocale();
  const nav = t("nav", locale);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const links = [
    { label: nav.services, href: "#services" },
    { label: nav.about, href: "#about" },
    { label: nav.portfolio, href: "#portfolio" },
    { label: nav.contact, href: "#contact" },
  ];

  return (
    <>
      <header
        dir={dir}
        className="fixed top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl"
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          {/* Logo */}
          <a href="#" className="flex shrink-0 items-center gap-2">
            <Image
              src="/brandings/logo-icon.svg"
              alt="Taqneo"
              width={32}
              height={32}
              priority
            />
            <span className="text-lg font-bold tracking-tight text-foreground">
              Taqneo
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Language toggle */}
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLocale}
              className="rounded-full px-3 text-xs font-semibold"
            >
              {locale === "en" ? "عربي" : "EN"}
            </Button>

            {/* CTA - desktop */}
            <Button asChild className="hidden rounded-full bg-neo-teal px-5 text-sm font-semibold text-background hover:bg-neo-teal/80 md:inline-flex">
              <a href="#contact">{nav.cta}</a>
            </Button>

            {/* Mobile hamburger */}
            <Button
              variant="ghost"
              size="icon-sm"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M5 5L15 15M15 5L5 15"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M3 6H17M3 10H17M3 14H17"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </Button>
          </div>
        </nav>
      </header>

      {/* Fullscreen mobile menu — separate from header */}
      <div
        dir={dir}
        className={`fixed inset-0 z-40 flex flex-col bg-background pt-16 transition-all duration-500 md:pointer-events-none md:hidden ${
          mobileOpen
            ? "opacity-100 visible"
            : "pointer-events-none opacity-0 invisible"
        }`}
      >
        {/* Decorative glow */}
        <div className="pointer-events-none absolute top-1/3 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-neo-teal/5 blur-[100px]" />

        {/* Nav links — centered */}
        <div className="relative flex flex-1 flex-col items-center justify-center gap-2">
          {links.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="group relative overflow-hidden px-4 py-3"
              style={{
                transitionDelay: mobileOpen ? `${100 + i * 75}ms` : "0ms",
                opacity: mobileOpen ? 1 : 0,
                transform: mobileOpen ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.4s ease, transform 0.4s ease",
              }}
            >
              <span className="text-3xl font-bold tracking-tight text-muted-foreground transition-colors duration-300 group-hover:text-neo-teal sm:text-4xl">
                {link.label}
              </span>
              <span className="absolute bottom-2 left-4 right-4 h-px origin-left scale-x-0 bg-neo-teal transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}

          {/* CTA button */}
          <div
            className="mt-6"
            style={{
              transitionDelay: mobileOpen ? `${100 + links.length * 75}ms` : "0ms",
              opacity: mobileOpen ? 1 : 0,
              transform: mobileOpen ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.4s ease, transform 0.4s ease",
            }}
          >
            <Button
              asChild
              className="h-12 rounded-full bg-neo-teal px-8 text-base font-semibold text-background hover:bg-neo-teal/80"
            >
              <a href="#contact" onClick={() => setMobileOpen(false)}>
                {nav.cta}
              </a>
            </Button>
          </div>
        </div>

        {/* Bottom brand mark */}
        <div
          className="relative pb-10 text-center"
          style={{
            transitionDelay: mobileOpen ? `${100 + (links.length + 1) * 75}ms` : "0ms",
            opacity: mobileOpen ? 1 : 0,
            transition: "opacity 0.5s ease",
          }}
        >
          <Image
            src="/brandings/logo-icon.svg"
            alt=""
            width={24}
            height={24}
            className="mx-auto opacity-20"
            aria-hidden="true"
          />
        </div>
      </div>
    </>
  );
}
