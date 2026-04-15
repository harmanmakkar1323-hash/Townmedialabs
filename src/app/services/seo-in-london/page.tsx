import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["london"];

export const metadata: Metadata = {
  title: "Best SEO Agency in London",
  description: "Top-rated SEO company in London. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
  keywords: ["seo london", "seo agency london", "seo company london"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-london",
  },
  openGraph: {
    title: "Best SEO Agency in London",
    description: "Top-rated SEO company in London. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    url: "https://townmedialabs.com/services/seo-in-london",
    siteName: "TML Agency",
    type: "website",
    locale: "en_GB",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in London" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best SEO Agency in London",
    description: "Top-rated SEO company in London. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInLondonPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
