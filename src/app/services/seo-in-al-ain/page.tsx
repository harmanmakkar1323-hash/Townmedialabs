import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["al_ain"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Al Ain",
  description: "Top-rated SEO company in Al Ain. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
  keywords: ["seo al ain", "seo agency al ain", "seo company al ain"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-al-ain",
  },
  openGraph: {
    title: "Best SEO Agency in Al Ain",
    description: "Top-rated SEO company in Al Ain. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    url: "https://townmedialabs.com/services/seo-in-al-ain",
    siteName: "TML Agency",
    type: "website",
    locale: "en_AE",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Al Ain" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best SEO Agency in Al Ain",
    description: "Top-rated SEO company in Al Ain. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInAlAinPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
