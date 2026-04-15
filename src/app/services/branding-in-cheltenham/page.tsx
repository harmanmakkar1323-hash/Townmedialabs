import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["cheltenham"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Cheltenham",
  description: "Top-rated Branding company in Cheltenham. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
  keywords: ["branding cheltenham", "branding agency cheltenham", "branding company cheltenham"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-cheltenham",
  },
  openGraph: {
    title: "Best Branding Agency in Cheltenham",
    description: "Top-rated Branding company in Cheltenham. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    url: "https://townmedialabs.com/services/branding-in-cheltenham",
    siteName: "TML Agency",
    type: "website",
    locale: "en_GB",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Cheltenham" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Branding Agency in Cheltenham",
    description: "Top-rated Branding company in Cheltenham. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInCheltenhamPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
