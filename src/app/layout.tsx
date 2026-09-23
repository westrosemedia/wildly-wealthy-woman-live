import type { Metadata } from "next";
import { Geist, Newsreader } from "next/font/google";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";

import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  weight: ["300", "400"],
  style: ["normal", "italic"],
  display: "swap",
});

const grotesque = Geist({
  subsets: ["latin"],
  variable: "--font-grotesque",
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.name,
    template: `%s · ${site.name}`,
  },
  applicationName: site.name,
  icons: {
    icon: "/favicon.svg",
  },
  alternates: {
    canonical: site.url,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${grotesque.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-cream font-sans text-burgundy">
        <SiteHeader />
        <div className="flex flex-1 flex-col">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
