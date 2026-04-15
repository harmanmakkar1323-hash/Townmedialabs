import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["london"];

export const metadata: Metadata = {
  title: "Best Branding Agency in London",
  description: "Top-rated Branding company in London. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
  keywords: ["branding london", "branding agency london", "branding company london"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-london",
  },
  openGraph: {
    title: "Best Branding Agency in London",
    description: "Top-rated Branding company in London. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    url: "https://townmedialabs.com/services/branding-in-london",
    siteName: "TML Agency",
    type: "website",
    locale: "en_GB",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in London" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Branding Agency in London",
    description: "Top-rated Branding company in London. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInLondonPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
