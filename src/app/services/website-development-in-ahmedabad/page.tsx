import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["ahmedabad"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Ahmedabad",
  description: "Top-rated Website Development company in Ahmedabad. TML offers expert Website Development services for 500+ businesses. Get a free Website Development consultation today.",
  keywords: ["website development ahmedabad", "website development agency ahmedabad", "website development company ahmedabad"],
  alternates: {
    canonical: "https://townmedialabs.com/services/website-development-in-ahmedabad",
  },
  openGraph: {
    title: "Best Website Development Agency in Ahmedabad",
    description: "Top-rated Website Development company in Ahmedabad. TML offers expert Website Development services for 500+ businesses. Get a free Website Development consultation today.",
    url: "https://townmedialabs.com/services/website-development-in-ahmedabad",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Website Development Agency in Ahmedabad" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Website Development Agency in Ahmedabad",
    description: "Top-rated Website Development company in Ahmedabad. TML offers expert Website Development services for 500+ businesses. Get a free Website Development consultation today.",
    images: ["/og-image.png"],
  },
};

export default function WebsitedevelopmentInAhmedabadPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
