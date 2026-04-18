import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["patiala"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Patiala",
  description: "Top-rated Website Development company in Patiala. TML offers expert Website Development services for 500+ businesses. Get a free Website Development consultation today.",
  keywords: ["website development patiala", "website development agency patiala", "website development company patiala"],
  alternates: {
    canonical: "https://townmedialabs.com/services/website-development-in-patiala",
  },
  openGraph: {
    title: "Best Website Development Agency in Patiala",
    description: "Top-rated Website Development company in Patiala. TML offers expert Website Development services for 500+ businesses. Get a free Website Development consultation today.",
    url: "https://townmedialabs.com/services/website-development-in-patiala",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Website Development Agency in Patiala" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Website Development Agency in Patiala",
    description: "Top-rated Website Development company in Patiala. TML offers expert Website Development services for 500+ businesses. Get a free Website Development consultation today.",
    images: ["/og-image.png"],
  },
};

export default function WebsitedevelopmentInPatialaPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
