import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["middlesbrough"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Middlesbrough",
  description: "Top-rated Website Development company in Middlesbrough. TML offers expert Website Development services for 500+ businesses. Get a free Website Development consultation today.",
  keywords: ["website development middlesbrough", "website development agency middlesbrough", "website development company middlesbrough"],
  alternates: {
    canonical: "https://townmedialabs.com/services/website-development-in-middlesbrough",
  },
  openGraph: {
    title: "Best Website Development Agency in Middlesbrough",
    description: "Top-rated Website Development company in Middlesbrough. TML offers expert Website Development services for 500+ businesses. Get a free Website Development consultation today.",
    url: "https://townmedialabs.com/services/website-development-in-middlesbrough",
    siteName: "TML Agency",
    type: "website",
    locale: "en_GB",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Website Development Agency in Middlesbrough" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Website Development Agency in Middlesbrough",
    description: "Top-rated Website Development company in Middlesbrough. TML offers expert Website Development services for 500+ businesses. Get a free Website Development consultation today.",
    images: ["/og-image.png"],
  },
};

export default function WebsiteDevelopmentInMiddlesbroughPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
