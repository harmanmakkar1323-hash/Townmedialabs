import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["visakhapatnam"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Visakhapatnam",
  description: "Top-rated Website Development company in Visakhapatnam. TML offers expert Website Development services for 500+ businesses. Get a free Website Development consultation today.",
  keywords: ["website development visakhapatnam", "website development agency visakhapatnam", "website development company visakhapatnam"],
  alternates: {
    canonical: "https://townmedialabs.com/services/website-development-in-visakhapatnam",
  },
  openGraph: {
    title: "Best Website Development Agency in Visakhapatnam",
    description: "Top-rated Website Development company in Visakhapatnam. TML offers expert Website Development services for 500+ businesses. Get a free Website Development consultation today.",
    url: "https://townmedialabs.com/services/website-development-in-visakhapatnam",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Website Development Agency in Visakhapatnam" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Website Development Agency in Visakhapatnam",
    description: "Top-rated Website Development company in Visakhapatnam. TML offers expert Website Development services for 500+ businesses. Get a free Website Development consultation today.",
    images: ["/og-image.png"],
  },
};

export default function WebsitedevelopmentInVisakhapatnamPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
