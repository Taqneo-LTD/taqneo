"use client";

import Image from "next/image";
import { useLocale } from "@/lib/i18n/locale-context";
import { t } from "@/lib/i18n/content";
import { Button } from "@/components/ui/button";
import ElectricBorder from "@/components/ElectricBorder";

const socials = [
  { name: "Facebook", href: "https://www.facebook.com/taqne0/", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z"/></svg> },
  { name: "Instagram", href: "https://www.instagram.com/taqneo/", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg> },
  { name: "X", href: "https://x.com/taqneo", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
  { name: "LinkedIn", href: "https://linkedin.com/company/taqneo/", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/></svg> },
  { name: "YouTube", href: "https://www.youtube.com/@taqneo", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg> },
  { name: "Snapchat", href: "https://www.snapchat.com/@taqneo", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12.922-.214.105-.037.21-.06.314-.06a.94.94 0 0 1 .472.126.87.87 0 0 1 .45.725c0 .39-.21.69-.63.884-.525.24-1.26.39-1.545.465a.54.54 0 0 0-.36.344c-.03.12-.015.27.015.39.375 1.29 1.26 2.49 2.175 2.985.18.1.42.21.63.27.39.105.57.375.57.63 0 .54-.78.93-2.205 1.14-.12.015-.24.135-.27.27-.045.21-.09.42-.135.6-.06.195-.165.345-.51.345a3.3 3.3 0 0 1-.615-.075c-.39-.075-.885-.18-1.53-.18-.57 0-1.095.12-1.605.375a5.63 5.63 0 0 1-1.155.63C13.32 18.9 12.57 19.2 12 19.2c-.585 0-1.335-.3-1.905-.525a5.63 5.63 0 0 1-1.155-.63 3.86 3.86 0 0 0-1.605-.375c-.645 0-1.14.105-1.53.18a3.3 3.3 0 0 1-.615.075c-.345 0-.45-.15-.51-.345-.045-.18-.09-.39-.135-.6-.03-.135-.15-.255-.27-.27C2.79 16.86 2.01 16.47 2.01 15.93c0-.255.18-.525.57-.63.21-.06.45-.165.63-.27.915-.495 1.8-1.695 2.175-2.985.03-.12.045-.27.015-.39a.54.54 0 0 0-.36-.345c-.3-.075-1.02-.225-1.545-.465-.42-.195-.63-.495-.63-.885a.87.87 0 0 1 .45-.724.94.94 0 0 1 .471-.126c.105 0 .21.022.315.06.27.1.62.214.92.214.195 0 .33-.045.405-.09-.008-.165-.018-.33-.03-.51l-.003-.06c-.105-1.628-.23-3.654.3-4.847C7.86 1.069 11.216.793 12.206.793z"/></svg> },
];

export default function Contact() {
  const { locale, dir } = useLocale();
  const contact = t("contact", locale);

  return (
    <section id="contact" dir={dir} className="relative overflow-x-clip py-24 sm:py-32">
      {/* Decorative brand element — right bottom */}
      <div className="pointer-events-none absolute -right-10 -bottom-16 opacity-[0.04] rtl:-left-10 rtl:right-auto">
        <Image
          src="/brandings/brand-element.svg"
          alt=""
          width={300}
          height={480}
          aria-hidden="true"
        />
      </div>

      <div className="mx-auto max-w-4xl px-6">
        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
            {contact.heading}{" "}
            <span
              className="text-neo-teal"
              style={{ fontFamily: "var(--font-basmala)" }}
            >
              {contact.headingAccent}
            </span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            {contact.subtitle}
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid gap-5 sm:grid-cols-2">
          {/* Email */}
          <ElectricBorder color="#8BDFD7" speed={0.3} chaos={0.04} borderRadius={16} className="" style={{}}>
            <div className="rounded-2xl p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-neo-teal/10 text-neo-teal">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 4-10 8L2 4" />
                </svg>
              </div>
              <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground/60">
                {locale === "en" ? "Email us" : "راسلنا"}
              </p>
              <a
                href={`mailto:${contact.email}`}
                className="mt-1 block text-lg font-semibold text-neo-teal transition-opacity hover:opacity-80"
              >
                {contact.email}
              </a>
            </div>
          </ElectricBorder>

          {/* Website */}
          <ElectricBorder color="#8BDFD7" speed={0.3} chaos={0.04} borderRadius={16} className="" style={{}}>
            <div className="rounded-2xl p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-neo-teal/10 text-neo-teal">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground/60">
                {locale === "en" ? "Website" : "الموقع"}
              </p>
              <a
                href="https://www.taqneo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block text-lg font-semibold text-foreground transition-colors hover:text-neo-teal"
              >
                www.taqneo.com
              </a>
            </div>
          </ElectricBorder>
        </div>

        {/* WhatsApp */}
        <div className="mt-5">
          <ElectricBorder color="#25D366" speed={0.3} chaos={0.04} borderRadius={16} className="" style={{}}>
            <a
              href="https://wa.me/966578189424"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl px-8 py-5 transition-opacity hover:opacity-80"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#25D366]/10 text-[#25D366]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                </svg>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground/60">
                  {locale === "en" ? "WhatsApp" : "واتساب"}
                </p>
                <span className="mt-0.5 block text-lg font-semibold text-[#25D366]" dir="ltr">
                  +966 57 818 9424
                </span>
              </div>
            </a>
          </ElectricBorder>
        </div>

        {/* Socials */}
        <div className="mt-12 text-center">
          <p className="mb-6 text-xs font-medium uppercase tracking-widest text-muted-foreground/60">
            {locale === "en" ? "Follow us" : "تابعنا"}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-border/60 text-muted-foreground transition-all duration-300 hover:border-neo-teal/40 hover:bg-neo-teal/10 hover:text-neo-teal"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Big CTA */}
        <div className="mt-14 text-center">
          <Button
            asChild
            className="h-14 rounded-full bg-neo-teal px-10 text-base font-semibold text-background hover:bg-neo-teal/80"
          >
            <a href={`mailto:hello@teqneo.com`}>{contact.cta}</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
