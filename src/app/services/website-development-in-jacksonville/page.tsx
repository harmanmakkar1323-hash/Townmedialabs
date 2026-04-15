import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["jacksonville"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Jacksonville",
  description: "Top-rated Website Development company in Jacksonville. TML offers expert Website Development services for 500+ businesses. Get a free Website Development consultation today.",
  keywords: ["website development jacksonville", "website development agency jacksonville", "website development company jacksonville"],
  alternates: {
    canonical: "https://townmedialabs.com/services/website-development-in-jacksonville",
  },
  openGraph: {
    title: "Best Website Development Agency in Jacksonville",
    description: "Top-rated Website Development company in Jacksonville. TML offers expert Website Development services for 500+ businesses. Get a free Website Development consultation today.",
    url: "https://townmedialabs.com/services/website-development-in-jacksonville",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Website Development Agency in Jacksonville" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Website Development Agency in Jacksonville",
    description: "Top-rated Website Development company in Jacksonville. TML offers expert Website Development services for 500+ businesses. Get a free Website Development consultation today.",
    images: ["/og-image.png"],
  },
};

export default function WebsiteDevelopmentInJacksonvillePage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
