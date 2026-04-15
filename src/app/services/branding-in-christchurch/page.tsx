import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["christchurch"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Christchurch",
  description: "Top-rated Branding company in Christchurch. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
  keywords: ["branding christchurch", "branding agency christchurch", "branding christchurch nz"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-christchurch",
  },
  openGraph: {
    title: "Best Branding Agency in Christchurch",
    description: "Top-rated Branding company in Christchurch. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    url: "https://townmedialabs.com/services/branding-in-christchurch",
    siteName: "TML Agency",
    type: "website",
    locale: "en_NZ",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Christchurch" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Branding Agency in Christchurch",
    description: "Top-rated Branding company in Christchurch. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInChristchurchPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
