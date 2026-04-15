import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["toowoomba"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Toowoomba",
  description: "Top-rated Website Development company in Toowoomba. TML offers expert Website Development services for 500+ businesses. Get a free Website Development consultation today.",
  keywords: ["website development toowoomba", "website development agency toowoomba", "website development company toowoomba"],
  alternates: {
    canonical: "https://townmedialabs.com/services/website-development-in-toowoomba",
  },
  openGraph: {
    title: "Best Website Development Agency in Toowoomba",
    description: "Top-rated Website Development company in Toowoomba. TML offers expert Website Development services for 500+ businesses. Get a free Website Development consultation today.",
    url: "https://townmedialabs.com/services/website-development-in-toowoomba",
    siteName: "TML Agency",
    type: "website",
    locale: "en_AU",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Website Development Agency in Toowoomba" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Website Development Agency in Toowoomba",
    description: "Top-rated Website Development company in Toowoomba. TML offers expert Website Development services for 500+ businesses. Get a free Website Development consultation today.",
    images: ["/og-image.png"],
  },
};

export default function WebsiteDevelopmentInToowoombaPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
