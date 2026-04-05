"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/lib/i18n/locale-context";
import { t } from "@/lib/i18n/content";

const socials = [
  { name: "Facebook", href: "https://www.facebook.com/taqne0/", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z"/></svg> },
  { name: "Instagram", href: "https://www.instagram.com/taqneo/", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg> },
  { name: "X", href: "https://x.com/taqneo", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
  { name: "LinkedIn", href: "https://linkedin.com/company/taqneo/", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/></svg> },
  { name: "YouTube", href: "https://www.youtube.com/@taqneo", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg> },
  { name: "Snapchat", href: "https://www.snapchat.com/@taqneo", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12.922-.214.105-.037.21-.06.314-.06a.94.94 0 0 1 .472.126.87.87 0 0 1 .45.725c0 .39-.21.69-.63.884-.525.24-1.26.39-1.545.465a.54.54 0 0 0-.36.344c-.03.12-.015.27.015.39.375 1.29 1.26 2.49 2.175 2.985.18.1.42.21.63.27.39.105.57.375.57.63 0 .54-.78.93-2.205 1.14-.12.015-.24.135-.27.27-.045.21-.09.42-.135.6-.06.195-.165.345-.51.345a3.3 3.3 0 0 1-.615-.075c-.39-.075-.885-.18-1.53-.18-.57 0-1.095.12-1.605.375a5.63 5.63 0 0 1-1.155.63C13.32 18.9 12.57 19.2 12 19.2c-.585 0-1.335-.3-1.905-.525a5.63 5.63 0 0 1-1.155-.63 3.86 3.86 0 0 0-1.605-.375c-.645 0-1.14.105-1.53.18a3.3 3.3 0 0 1-.615.075c-.345 0-.45-.15-.51-.345-.045-.18-.09-.39-.135-.6-.03-.135-.15-.255-.27-.27C2.79 16.86 2.01 16.47 2.01 15.93c0-.255.18-.525.57-.63.21-.06.45-.165.63-.27.915-.495 1.8-1.695 2.175-2.985.03-.12.045-.27.015-.39a.54.54 0 0 0-.36-.345c-.3-.075-1.02-.225-1.545-.465-.42-.195-.63-.495-.63-.885a.87.87 0 0 1 .45-.724.94.94 0 0 1 .471-.126c.105 0 .21.022.315.06.27.1.62.214.92.214.195 0 .33-.045.405-.09-.008-.165-.018-.33-.03-.51l-.003-.06c-.105-1.628-.23-3.654.3-4.847C7.86 1.069 11.216.793 12.206.793z"/></svg> },
];

export default function Footer() {
  const { locale, dir } = useLocale();
  const footer = t("footer", locale);
  const year = new Date().getFullYear();

  return (
    <footer dir={dir} className="border-t border-border/30">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-10">
        {/* Logo + tagline */}
        <div className="flex items-center gap-3">
          <Image
            src="/brandings/logo-icon.svg"
            alt="Taqneo"
            width={28}
            height={28}
          />
          <span className="text-sm font-semibold text-foreground">Taqneo</span>
          <span className="text-sm text-muted-foreground/50">|</span>
          <span className="text-sm text-muted-foreground">{footer.tagline}</span>
        </div>

        {/* Social icons */}
        <div className="flex gap-3">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground/50 transition-colors hover:text-neo-teal"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Legal links */}
        <div className="flex items-center gap-4 text-xs text-muted-foreground/40">
          <Link href="/terms" className="transition-colors hover:text-muted-foreground">
            {locale === "en" ? "Terms & Conditions" : "الشروط والأحكام"}
          </Link>
          <Link href="/privacy" className="transition-colors hover:text-muted-foreground">
            {locale === "en" ? "Privacy Policy" : "سياسة الخصوصية"}
          </Link>
        </div>

        {/* Copyright + location */}
        <div className="flex items-center gap-2 text-xs text-muted-foreground/40">
          <span>&copy; {year} {footer.copyright}</span>
          <span>|</span>
          <Image
            src="/flags/sa.svg"
            alt="Saudi Arabia"
            width={16}
            height={12}
            className="rounded-sm"
          />
          <span>{footer.location}</span>
        </div>
      </div>
    </footer>
  );
}
