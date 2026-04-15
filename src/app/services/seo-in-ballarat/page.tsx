import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["ballarat"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Ballarat",
  description: "Top-rated SEO company in Ballarat. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
  keywords: ["seo ballarat", "seo agency ballarat", "seo company ballarat"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-ballarat",
  },
  openGraph: {
    title: "Best SEO Agency in Ballarat",
    description: "Top-rated SEO company in Ballarat. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    url: "https://townmedialabs.com/services/seo-in-ballarat",
    siteName: "TML Agency",
    type: "website",
    locale: "en_AU",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Ballarat" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best SEO Agency in Ballarat",
    description: "Top-rated SEO company in Ballarat. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInBallaratPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
