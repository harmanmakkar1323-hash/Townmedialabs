import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["pittsburgh"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Pittsburgh",
  description: "Top-rated Website Development company in Pittsburgh. TML offers expert Website Development services for 500+ businesses. Get a free Website Development consultation today.",
  keywords: ["website development pittsburgh", "website development agency pittsburgh", "website development company pittsburgh"],
  alternates: {
    canonical: "https://townmedialabs.com/services/website-development-in-pittsburgh",
  },
  openGraph: {
    title: "Best Website Development Agency in Pittsburgh",
    description: "Top-rated Website Development company in Pittsburgh. TML offers expert Website Development services for 500+ businesses. Get a free Website Development consultation today.",
    url: "https://townmedialabs.com/services/website-development-in-pittsburgh",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Website Development Agency in Pittsburgh" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Website Development Agency in Pittsburgh",
    description: "Top-rated Website Development company in Pittsburgh. TML offers expert Website Development services for 500+ businesses. Get a free Website Development consultation today.",
    images: ["/og-image.png"],
  },
};

export default function WebsiteDevelopmentInPittsburghPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
