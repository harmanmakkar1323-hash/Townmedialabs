import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["salt_lake_city"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Salt Lake City",
  description: "Top-rated Branding company in Salt Lake City. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
  keywords: ["branding salt lake city", "branding agency salt lake city", "branding company salt lake city"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-salt-lake-city",
  },
  openGraph: {
    title: "Best Branding Agency in Salt Lake City",
    description: "Top-rated Branding company in Salt Lake City. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    url: "https://townmedialabs.com/services/branding-in-salt-lake-city",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Salt Lake City" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Branding Agency in Salt Lake City",
    description: "Top-rated Branding company in Salt Lake City. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInSaltLakeCityPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
