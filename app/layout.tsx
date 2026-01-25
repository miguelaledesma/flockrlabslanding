import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

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
        url: "https://flockrlabs.com/flockr.png?v=2",
        width: 1200,
        height: 630,
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
    images: ["https://flockrlabs.com/flockr.png?v=2"],
  },
  icons: {
    icon: [
      { url: "/flockr.png", sizes: "any" },
      { url: "/logo.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/flockr.png", sizes: "180x180" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          <Navigation />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
