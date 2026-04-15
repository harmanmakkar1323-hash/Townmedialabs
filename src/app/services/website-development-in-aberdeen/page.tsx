import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["aberdeen"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Aberdeen",
  description: "Top-rated Website Development company in Aberdeen. TML offers expert Website Development services for 500+ businesses. Get a free Website Development consultation today.",
  keywords: ["website development aberdeen", "website development agency aberdeen", "website development company aberdeen"],
  alternates: {
    canonical: "https://townmedialabs.com/services/website-development-in-aberdeen",
  },
  openGraph: {
    title: "Best Website Development Agency in Aberdeen",
    description: "Top-rated Website Development company in Aberdeen. TML offers expert Website Development services for 500+ businesses. Get a free Website Development consultation today.",
    url: "https://townmedialabs.com/services/website-development-in-aberdeen",
    siteName: "TML Agency",
    type: "website",
    locale: "en_GB",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Website Development Agency in Aberdeen" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Website Development Agency in Aberdeen",
    description: "Top-rated Website Development company in Aberdeen. TML offers expert Website Development services for 500+ businesses. Get a free Website Development consultation today.",
    images: ["/og-image.png"],
  },
};

export default function WebsiteDevelopmentInAberdeenPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
