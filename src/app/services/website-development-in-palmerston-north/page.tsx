import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["palmerston_north"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Palmerston North",
  description: "Top-rated Website Development company in Palmerston North. TML offers expert Website Development services for 500+ businesses. Get a free Website Development consultation today.",
  keywords: ["website development palmerston north", "website development agency palmerston north", "website development palmerston north nz"],
  alternates: {
    canonical: "https://townmedialabs.com/services/website-development-in-palmerston-north",
  },
  openGraph: {
    title: "Best Website Development Agency in Palmerston North",
    description: "Top-rated Website Development company in Palmerston North. TML offers expert Website Development services for 500+ businesses. Get a free Website Development consultation today.",
    url: "https://townmedialabs.com/services/website-development-in-palmerston-north",
    siteName: "TML Agency",
    type: "website",
    locale: "en_NZ",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Website Development Agency in Palmerston North" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Website Development Agency in Palmerston North",
    description: "Top-rated Website Development company in Palmerston North. TML offers expert Website Development services for 500+ businesses. Get a free Website Development consultation today.",
    images: ["/og-image.png"],
  },
};

export default function WebsiteDevelopmentInPalmerstonNorthPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
