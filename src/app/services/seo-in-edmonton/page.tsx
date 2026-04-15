import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["edmonton"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Edmonton",
  description: "Top-rated SEO company in Edmonton. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
  keywords: ["seo edmonton", "seo agency edmonton"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-edmonton",
  },
  openGraph: {
    title: "Best SEO Agency in Edmonton",
    description: "Top-rated SEO company in Edmonton. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    url: "https://townmedialabs.com/services/seo-in-edmonton",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Edmonton" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best SEO Agency in Edmonton",
    description: "Top-rated SEO company in Edmonton. TML offers expert SEO services for 500+ businesses. Get a free SEO consultation today.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
