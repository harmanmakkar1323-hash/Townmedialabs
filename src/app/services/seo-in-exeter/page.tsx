import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["exeter"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Exeter",
  description: "Top-rated SEO company in Exeter. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
  keywords: ["seo exeter", "seo agency exeter", "seo company exeter"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-exeter",
  },
  openGraph: {
    title: "Best SEO Agency in Exeter",
    description: "Top-rated SEO company in Exeter. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    url: "https://townmedialabs.com/services/seo-in-exeter",
    siteName: "TML Agency",
    type: "website",
    locale: "en_GB",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Exeter" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best SEO Agency in Exeter",
    description: "Top-rated SEO company in Exeter. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInExeterPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
