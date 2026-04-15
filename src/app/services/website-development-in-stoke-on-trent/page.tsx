import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["stoke_on_trent"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Stoke-on-Trent",
  description: "Top-rated Website Development company in Stoke-on-Trent. TML offers expert Website Development services for 500+ businesses. Get a free Website Development consultation today.",
  keywords: ["website development stoke-on-trent", "website development agency stoke-on-trent", "website development company stoke-on-trent"],
  alternates: {
    canonical: "https://townmedialabs.com/services/website-development-in-stoke-on-trent",
  },
  openGraph: {
    title: "Best Website Development Agency in Stoke-on-Trent",
    description: "Top-rated Website Development company in Stoke-on-Trent. TML offers expert Website Development services for 500+ businesses. Get a free Website Development consultation today.",
    url: "https://townmedialabs.com/services/website-development-in-stoke-on-trent",
    siteName: "TML Agency",
    type: "website",
    locale: "en_GB",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Website Development Agency in Stoke-on-Trent" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Website Development Agency in Stoke-on-Trent",
    description: "Top-rated Website Development company in Stoke-on-Trent. TML offers expert Website Development services for 500+ businesses. Get a free Website Development consultation today.",
    images: ["/og-image.png"],
  },
};

export default function WebsiteDevelopmentInStokeOnTrentPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
