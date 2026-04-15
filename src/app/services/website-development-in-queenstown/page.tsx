import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["queenstown"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Queenstown",
  description: "Top-rated Website Development company in Queenstown. TML offers expert Website Development services for 500+ businesses. Get a free Website Development consultation today.",
  keywords: ["website development queenstown", "website development agency queenstown", "website development queenstown nz"],
  alternates: {
    canonical: "https://townmedialabs.com/services/website-development-in-queenstown",
  },
  openGraph: {
    title: "Best Website Development Agency in Queenstown",
    description: "Top-rated Website Development company in Queenstown. TML offers expert Website Development services for 500+ businesses. Get a free Website Development consultation today.",
    url: "https://townmedialabs.com/services/website-development-in-queenstown",
    siteName: "TML Agency",
    type: "website",
    locale: "en_NZ",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Website Development Agency in Queenstown" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Website Development Agency in Queenstown",
    description: "Top-rated Website Development company in Queenstown. TML offers expert Website Development services for 500+ businesses. Get a free Website Development consultation today.",
    images: ["/og-image.png"],
  },
};

export default function WebsiteDevelopmentInQueenstownPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
