import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["vadodara"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Vadodara",
  description: "Top-rated SEO company in Vadodara. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
  keywords: ["search engine optimization vadodara", "search engine optimization agency vadodara", "search engine optimization company vadodara"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-vadodara",
  },
  openGraph: {
    title: "Best SEO Agency in Vadodara",
    description: "Top-rated SEO company in Vadodara. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    url: "https://townmedialabs.com/services/seo-in-vadodara",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Vadodara" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best SEO Agency in Vadodara",
    description: "Top-rated SEO company in Vadodara. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInVadodaraPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
