import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  metadataBase: new URL("https://flockrlabs.com"),
  title: "Flockr Labs — Custom Software for Businesses Outgrowing SaaS",
  description: "We design, build, and maintain CRMs, ops platforms, and AI workflows for growing businesses that have outgrown HubSpot, QuickBooks, and the rest. Engineering experience from Airbnb, HubSpot, and AI startups.",
  authors: [{ name: "Flockr Labs LLC" }],
  openGraph: {
    title: "Flockr Labs — Custom Software for Businesses Outgrowing SaaS",
    description: "Custom CRMs, ops platforms, and AI workflows for growing businesses. Engineering experience from Airbnb, HubSpot, and AI startups.",
    url: "https://flockrlabs.com",
    siteName: "Flockr Labs",
    images: [
      {
        url: "/flockr.png?v=2",
        width: 1200,
        height: 630,
        alt: "Flockr Labs",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flockr Labs — Custom Software for Businesses Outgrowing SaaS",
    description: "Custom CRMs, ops platforms, and AI workflows for growing businesses. Engineering experience from Airbnb, HubSpot, and AI startups.",
    images: ["/flockr.png?v=2"],
  },
  // Favicon is auto-served from app/icon.svg by Next.js convention.
  // Apple-touch-icon falls back to that as well.
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
