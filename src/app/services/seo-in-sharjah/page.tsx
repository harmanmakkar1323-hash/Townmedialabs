import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["sharjah"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Sharjah",
  description: "Top-rated SEO company in Sharjah. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
  keywords: ["seo sharjah", "seo agency sharjah", "seo company sharjah"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-sharjah",
  },
  openGraph: {
    title: "Best SEO Agency in Sharjah",
    description: "Top-rated SEO company in Sharjah. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    url: "https://townmedialabs.com/services/seo-in-sharjah",
    siteName: "TML Agency",
    type: "website",
    locale: "en_AE",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Sharjah" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best SEO Agency in Sharjah",
    description: "Top-rated SEO company in Sharjah. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInSharjahPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
