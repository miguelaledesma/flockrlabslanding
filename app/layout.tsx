import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Flockr Labs - Technology Help for Small Businesses",
  description: "Affordable tech solutions for small businesses, local shops, and startups. From websites to online presence—we make technology simple. Advisors from FAANG companies.",
  keywords: ["small business technology", "website design", "Shopify stores", "AI automation", "SEO", "local business", "startup consulting"],
  authors: [{ name: "Flockr Labs LLC" }],
  openGraph: {
    title: "Flockr Labs - Technology Help for Small Businesses",
    description: "Affordable tech solutions for small businesses. From websites to AI automation—we make technology simple.",
    url: "https://flockrlabs.com",
    siteName: "Flockr Labs",
    images: [
      {
        url: "/flockr.png",
        width: 800,
        height: 300,
        alt: "Flockr Labs Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flockr Labs - Technology Help for Small Businesses",
    description: "Affordable tech solutions for small businesses. From websites to AI automation—we make technology simple.",
    images: ["/flockr.png"],
  },
  icons: {
    icon: "/flockr.png",
    apple: "/flockr.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
