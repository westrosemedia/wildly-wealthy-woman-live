import type { Metadata } from "next";
import {
  Geist,
  Great_Vibes,
  Instrument_Serif,
  Lato,
  Newsreader,
  Nunito_Sans,
} from "next/font/google";

import { SiteFrame } from "@/components/site-frame";
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

const wixSans = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-wix-sans",
  display: "swap",
});

const wixDisplay = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-wix-display",
  display: "swap",
});

const wixScript = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-wix-script",
  display: "swap",
});

const wixSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-wix-serif",
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
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${grotesque.variable} ${wixSans.variable} ${wixDisplay.variable} ${wixScript.variable} ${wixSerif.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-cream font-sans text-burgundy">
        <SiteFrame>{children}</SiteFrame>
      </body>
    </html>
  );
}
