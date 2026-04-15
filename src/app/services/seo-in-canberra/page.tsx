import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["canberra"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Canberra",
  description: "Top-rated SEO company in Canberra. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
  keywords: ["seo canberra", "seo agency canberra", "seo company canberra"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-canberra",
  },
  openGraph: {
    title: "Best SEO Agency in Canberra",
    description: "Top-rated SEO company in Canberra. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    url: "https://townmedialabs.com/services/seo-in-canberra",
    siteName: "TML Agency",
    type: "website",
    locale: "en_AU",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Canberra" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best SEO Agency in Canberra",
    description: "Top-rated SEO company in Canberra. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInCanberraPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
