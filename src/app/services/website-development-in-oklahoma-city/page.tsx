import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["oklahoma_city"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Oklahoma City",
  description: "Top-rated Website Development company in Oklahoma City. TML offers expert Website Development services for 500+ businesses. Get a free Website Development consultation today.",
  keywords: ["website development oklahoma city", "website development agency oklahoma city", "website development company oklahoma city"],
  alternates: {
    canonical: "https://townmedialabs.com/services/website-development-in-oklahoma-city",
  },
  openGraph: {
    title: "Best Website Development Agency in Oklahoma City",
    description: "Top-rated Website Development company in Oklahoma City. TML offers expert Website Development services for 500+ businesses. Get a free Website Development consultation today.",
    url: "https://townmedialabs.com/services/website-development-in-oklahoma-city",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Website Development Agency in Oklahoma City" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Website Development Agency in Oklahoma City",
    description: "Top-rated Website Development company in Oklahoma City. TML offers expert Website Development services for 500+ businesses. Get a free Website Development consultation today.",
    images: ["/og-image.png"],
  },
};

export default function WebsiteDevelopmentInOklahomaCityPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
