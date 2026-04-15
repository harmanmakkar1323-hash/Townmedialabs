import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["leicester"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Leicester",
  description: "Top-rated Branding company in Leicester. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
  keywords: ["branding leicester", "branding agency leicester", "branding company leicester"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-leicester",
  },
  openGraph: {
    title: "Best Branding Agency in Leicester",
    description: "Top-rated Branding company in Leicester. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    url: "https://townmedialabs.com/services/branding-in-leicester",
    siteName: "TML Agency",
    type: "website",
    locale: "en_GB",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Leicester" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Branding Agency in Leicester",
    description: "Top-rated Branding company in Leicester. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInLeicesterPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
