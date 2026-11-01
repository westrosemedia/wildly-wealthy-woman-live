import type { Metadata } from "next";

import { WixLanding } from "@/components/wix-landing";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Wildly Wealthy Woman Live" },
  description:
    "March 4–6, 2027 at the Fairmont Banff Springs. A luxury, multi-generational weekend for women. Honour the past. Celebrate the present. Inspire the future.",
  openGraph: {
    title: "Wildly Wealthy Woman Live",
    description:
      "One extraordinary destination. Three unforgettable days. Fairmont Banff Springs, March 4–6, 2027.",
    url: site.url,
    images: [{ url: "/wix/hero-poster.jpg" }],
  },
};

export default function Home() {
  return <WixLanding />;
}
