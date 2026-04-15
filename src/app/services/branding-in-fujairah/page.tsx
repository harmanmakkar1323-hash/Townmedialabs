import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["fujairah"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Fujairah",
  description: "Top-rated Branding company in Fujairah. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
  keywords: ["branding fujairah", "branding agency fujairah", "branding company fujairah"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-fujairah",
  },
  openGraph: {
    title: "Best Branding Agency in Fujairah",
    description: "Top-rated Branding company in Fujairah. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    url: "https://townmedialabs.com/services/branding-in-fujairah",
    siteName: "TML Agency",
    type: "website",
    locale: "en_AE",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Fujairah" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Branding Agency in Fujairah",
    description: "Top-rated Branding company in Fujairah. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInFujairahPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
