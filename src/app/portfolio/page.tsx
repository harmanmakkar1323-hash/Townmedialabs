import type { Metadata } from "next";
import PortfolioPageClient from "./PortfolioPageClient";

export const metadata: Metadata = {
  title: "Portfolio — Web, Branding & Video Work",
  description:
    "Browse TML Agency's portfolio of web design, branding, UI/UX, video production & digital marketing projects for brands worldwide. See real work, real results.",
  openGraph: {
    title: "Portfolio — Web, Branding & Video Work",
    description:
      "Browse TML Agency's portfolio of web design, branding, UI/UX, video production & digital marketing projects for brands worldwide.",
    url: "https://townmedialabs.com/portfolio/",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "https://townmedialabs.com/og-image.png", width: 1200, height: 630, alt: "TML Agency Portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Portfolio — Web, Branding & Video Work",
    description: "Real projects, real results. See what we've built for brands worldwide.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "https://townmedialabs.com/portfolio/" },
};

export default function PortfolioPage() {
  return <PortfolioPageClient />;
}
