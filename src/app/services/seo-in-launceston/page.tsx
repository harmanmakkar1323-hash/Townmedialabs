import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["launceston"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Launceston",
  description: "Top-rated SEO company in Launceston. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
  keywords: ["seo launceston", "seo agency launceston", "seo company launceston"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-launceston",
  },
  openGraph: {
    title: "Best SEO Agency in Launceston",
    description: "Top-rated SEO company in Launceston. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    url: "https://townmedialabs.com/services/seo-in-launceston",
    siteName: "TML Agency",
    type: "website",
    locale: "en_AU",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Launceston" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best SEO Agency in Launceston",
    description: "Top-rated SEO company in Launceston. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInLauncestonPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
