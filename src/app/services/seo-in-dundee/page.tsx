import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["dundee"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Dundee",
  description: "Top-rated SEO company in Dundee. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
  keywords: ["seo dundee", "seo agency dundee", "seo company dundee"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-dundee",
  },
  openGraph: {
    title: "Best SEO Agency in Dundee",
    description: "Top-rated SEO company in Dundee. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    url: "https://townmedialabs.com/services/seo-in-dundee",
    siteName: "TML Agency",
    type: "website",
    locale: "en_GB",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Dundee" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best SEO Agency in Dundee",
    description: "Top-rated SEO company in Dundee. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInDundeePage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
