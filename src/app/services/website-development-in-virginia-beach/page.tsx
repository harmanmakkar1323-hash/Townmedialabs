import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["virginia_beach"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Virginia Beach",
  description: "Top-rated Website Development company in Virginia Beach. TML offers expert Website Development services for 500+ businesses. Get a free Website Development consultation today.",
  keywords: ["website development virginia beach", "website development agency virginia beach", "website development company virginia beach"],
  alternates: {
    canonical: "https://townmedialabs.com/services/website-development-in-virginia-beach",
  },
  openGraph: {
    title: "Best Website Development Agency in Virginia Beach",
    description: "Top-rated Website Development company in Virginia Beach. TML offers expert Website Development services for 500+ businesses. Get a free Website Development consultation today.",
    url: "https://townmedialabs.com/services/website-development-in-virginia-beach",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Website Development Agency in Virginia Beach" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Website Development Agency in Virginia Beach",
    description: "Top-rated Website Development company in Virginia Beach. TML offers expert Website Development services for 500+ businesses. Get a free Website Development consultation today.",
    images: ["/og-image.png"],
  },
};

export default function WebsiteDevelopmentInVirginiaBeachPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
