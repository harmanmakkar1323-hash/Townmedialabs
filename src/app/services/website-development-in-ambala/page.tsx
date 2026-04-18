import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["ambala"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Ambala",
  description: "Top-rated Website Development company in Ambala. TML offers expert Website Development services for 500+ businesses. Get a free Website Development consultation today.",
  keywords: ["website development ambala", "website development agency ambala", "website development company ambala"],
  alternates: {
    canonical: "https://townmedialabs.com/services/website-development-in-ambala",
  },
  openGraph: {
    title: "Best Website Development Agency in Ambala",
    description: "Top-rated Website Development company in Ambala. TML offers expert Website Development services for 500+ businesses. Get a free Website Development consultation today.",
    url: "https://townmedialabs.com/services/website-development-in-ambala",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Website Development Agency in Ambala" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Website Development Agency in Ambala",
    description: "Top-rated Website Development company in Ambala. TML offers expert Website Development services for 500+ businesses. Get a free Website Development consultation today.",
    images: ["/og-image.png"],
  },
};

export default function WebsitedevelopmentInAmbalaPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
