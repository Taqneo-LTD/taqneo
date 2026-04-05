import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import { LocaleProvider } from "@/lib/i18n/locale-context";
import { cn } from "@/lib/utils";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://www.taqneo.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Taqneo — Your Digital Partner in Saudi Arabia",
    template: "%s | Taqneo",
  },
  description:
    "Taqneo is a Saudi Arabia-based digital agency specializing in web design, software development, digital marketing, email marketing, office suite setup, and website maintenance.",
  keywords: [
    "Taqneo",
    "digital agency Saudi Arabia",
    "web design KSA",
    "software development Riyadh",
    "digital marketing Saudi",
    "website development",
    "email marketing",
    "office email setup",
    "website maintenance",
    "تقنيو",
    "وكالة رقمية",
    "تصميم مواقع",
    "تطوير برمجيات",
    "تسويق رقمي",
  ],
  authors: [{ name: "Taqneo", url: siteUrl }],
  creator: "Taqneo",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "ar_SA",
    url: siteUrl,
    siteName: "Taqneo",
    title: "Taqneo — Your Digital Partner in Saudi Arabia",
    description:
      "Web design, software development, digital marketing, and IT solutions for businesses in Saudi Arabia.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Taqneo — Software, Website, App, Design, Office Suite, Marketing, Socials",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Taqneo — Your Digital Partner in Saudi Arabia",
    description:
      "Web design, software development, digital marketing, and IT solutions for businesses in Saudi Arabia.",
    images: ["/og-image.png"],
    creator: "@taqneo",
    site: "@taqneo",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full antialiased dark",
        geistSans.variable,
        geistMono.variable,
        inter.variable,
        "font-sans"
      )}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden bg-background text-foreground">
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
