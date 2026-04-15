import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["fujairah"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Fujairah",
  description: "Top-rated SEO company in Fujairah. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
  keywords: ["seo fujairah", "seo agency fujairah", "seo company fujairah"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-fujairah",
  },
  openGraph: {
    title: "Best SEO Agency in Fujairah",
    description: "Top-rated SEO company in Fujairah. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    url: "https://townmedialabs.com/services/seo-in-fujairah",
    siteName: "TML Agency",
    type: "website",
    locale: "en_AE",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Fujairah" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best SEO Agency in Fujairah",
    description: "Top-rated SEO company in Fujairah. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInFujairahPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
