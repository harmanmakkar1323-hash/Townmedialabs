import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["abu_dhabi"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Abu Dhabi",
  description: "Top-rated Branding company in Abu Dhabi. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
  keywords: ["branding abu dhabi", "branding agency abu dhabi", "branding company abu dhabi"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-abu-dhabi",
  },
  openGraph: {
    title: "Best Branding Agency in Abu Dhabi",
    description: "Top-rated Branding company in Abu Dhabi. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    url: "https://townmedialabs.com/services/branding-in-abu-dhabi",
    siteName: "TML Agency",
    type: "website",
    locale: "en_AE",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Abu Dhabi" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Branding Agency in Abu Dhabi",
    description: "Top-rated Branding company in Abu Dhabi. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInAbuDhabiPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
