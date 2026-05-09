import type { Metadata } from "next";
import { ShopClient } from "./shop-client";

export const metadata: Metadata = {
  title: "AI Developer Hats | Prompt, Build, Ship",
  description:
    "Shop minimalist embroidered hats for AI developers, software engineers, startup builders, and tech people who prompt, build, and ship.",
  keywords: [
    "AI developer hats",
    "software engineer hat",
    "AI merch",
    "tech merch",
    "developer merch",
    "prompt engineer hat",
    "startup builder merch",
    "indie hacker hat",
  ],
  alternates: {
    canonical: "/shop",
  },
  openGraph: {
    title: "AI Developer Hats | Prompt, Build, Ship",
    description:
      "Minimalist embroidered hats for AI developers, software engineers, and builders who live somewhere between the first prompt and the final deploy.",
    url: "/shop",
    siteName: "Flockr Labs",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Flockr Labs — AI Builder Merch",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Developer Hats | Prompt, Build, Ship",
    description:
      "Minimalist embroidered hats for AI developers, software engineers, and builders who live somewhere between the first prompt and the final deploy.",
    images: ["/og-image.png"],
  },
};

export default function ShopPage() {
  return <ShopClient />;
}
