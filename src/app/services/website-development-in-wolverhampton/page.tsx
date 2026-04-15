import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["wolverhampton"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Wolverhampton",
  description: "Top-rated Website Development company in Wolverhampton. TML offers expert Website Development services for 500+ businesses. Get a free Website Development consultation today.",
  keywords: ["website development wolverhampton", "website development agency wolverhampton", "website development company wolverhampton"],
  alternates: {
    canonical: "https://townmedialabs.com/services/website-development-in-wolverhampton",
  },
  openGraph: {
    title: "Best Website Development Agency in Wolverhampton",
    description: "Top-rated Website Development company in Wolverhampton. TML offers expert Website Development services for 500+ businesses. Get a free Website Development consultation today.",
    url: "https://townmedialabs.com/services/website-development-in-wolverhampton",
    siteName: "TML Agency",
    type: "website",
    locale: "en_GB",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Website Development Agency in Wolverhampton" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Website Development Agency in Wolverhampton",
    description: "Top-rated Website Development company in Wolverhampton. TML offers expert Website Development services for 500+ businesses. Get a free Website Development consultation today.",
    images: ["/og-image.png"],
  },
};

export default function WebsiteDevelopmentInWolverhamptonPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
