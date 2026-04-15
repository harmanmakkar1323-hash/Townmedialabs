import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["kansas_city"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Kansas City",
  description: "Top-rated Website Development company in Kansas City. TML offers expert Website Development services for 500+ businesses. Get a free Website Development consultation today.",
  keywords: ["website development kansas city", "website development agency kansas city", "website development company kansas city"],
  alternates: {
    canonical: "https://townmedialabs.com/services/website-development-in-kansas-city",
  },
  openGraph: {
    title: "Best Website Development Agency in Kansas City",
    description: "Top-rated Website Development company in Kansas City. TML offers expert Website Development services for 500+ businesses. Get a free Website Development consultation today.",
    url: "https://townmedialabs.com/services/website-development-in-kansas-city",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Website Development Agency in Kansas City" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Website Development Agency in Kansas City",
    description: "Top-rated Website Development company in Kansas City. TML offers expert Website Development services for 500+ businesses. Get a free Website Development consultation today.",
    images: ["/og-image.png"],
  },
};

export default function WebsiteDevelopmentInKansasCityPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
