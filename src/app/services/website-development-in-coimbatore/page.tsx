import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["coimbatore"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Coimbatore",
  description: "Top-rated Website Development company in Coimbatore. TML offers expert Website Development services for 500+ businesses. Get a free Website Development consultation today.",
  keywords: ["website development coimbatore", "website development agency coimbatore", "website development company coimbatore"],
  alternates: {
    canonical: "https://townmedialabs.com/services/website-development-in-coimbatore",
  },
  openGraph: {
    title: "Best Website Development Agency in Coimbatore",
    description: "Top-rated Website Development company in Coimbatore. TML offers expert Website Development services for 500+ businesses. Get a free Website Development consultation today.",
    url: "https://townmedialabs.com/services/website-development-in-coimbatore",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Website Development Agency in Coimbatore" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Website Development Agency in Coimbatore",
    description: "Top-rated Website Development company in Coimbatore. TML offers expert Website Development services for 500+ businesses. Get a free Website Development consultation today.",
    images: ["/og-image.png"],
  },
};

export default function WebsitedevelopmentInCoimbatorePage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
