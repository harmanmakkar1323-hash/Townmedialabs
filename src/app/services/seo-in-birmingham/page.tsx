import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["birmingham"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Birmingham",
  description: "Top-rated SEO company in Birmingham. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
  keywords: ["seo birmingham", "seo agency birmingham", "seo company birmingham"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-birmingham",
  },
  openGraph: {
    title: "Best SEO Agency in Birmingham",
    description: "Top-rated SEO company in Birmingham. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    url: "https://townmedialabs.com/services/seo-in-birmingham",
    siteName: "TML Agency",
    type: "website",
    locale: "en_GB",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Birmingham" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best SEO Agency in Birmingham",
    description: "Top-rated SEO company in Birmingham. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInBirminghamPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
