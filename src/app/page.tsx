import type { Metadata } from "next";

import { WixLanding } from "@/components/wix-landing";
import { eventJsonLd, eventSeo } from "@/lib/event";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: eventSeo.title },
  description: eventSeo.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: eventSeo.title,
    description: eventSeo.description,
    url: site.url,
    type: "website",
    images: [{ url: "/wix/hero-poster.jpg", alt: "Wildly Wealthy Woman Live at the Fairmont Banff Springs" }],
  },
  twitter: {
    card: "summary_large_image",
    title: eventSeo.title,
    description: eventSeo.description,
    images: ["/wix/hero-poster.jpg"],
  },
};

export default function Home() {
  const jsonLd = eventJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <WixLanding />
    </>
  );
}
