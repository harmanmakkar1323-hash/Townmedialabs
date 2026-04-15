import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["indianapolis"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Indianapolis",
  description: "Top-rated Website Development company in Indianapolis. TML offers expert Website Development services for 500+ businesses. Get a free Website Development consultation today.",
  keywords: ["website development indianapolis", "website development agency indianapolis", "website development company indianapolis"],
  alternates: {
    canonical: "https://townmedialabs.com/services/website-development-in-indianapolis",
  },
  openGraph: {
    title: "Best Website Development Agency in Indianapolis",
    description: "Top-rated Website Development company in Indianapolis. TML offers expert Website Development services for 500+ businesses. Get a free Website Development consultation today.",
    url: "https://townmedialabs.com/services/website-development-in-indianapolis",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Website Development Agency in Indianapolis" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Website Development Agency in Indianapolis",
    description: "Top-rated Website Development company in Indianapolis. TML offers expert Website Development services for 500+ businesses. Get a free Website Development consultation today.",
    images: ["/og-image.png"],
  },
};

export default function WebsiteDevelopmentInIndianapolisPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
