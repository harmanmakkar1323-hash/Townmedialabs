import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["sharjah"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Sharjah",
  description: "Top-rated Branding company in Sharjah. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
  keywords: ["branding sharjah", "branding agency sharjah", "branding company sharjah"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-sharjah",
  },
  openGraph: {
    title: "Best Branding Agency in Sharjah",
    description: "Top-rated Branding company in Sharjah. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    url: "https://townmedialabs.com/services/branding-in-sharjah",
    siteName: "TML Agency",
    type: "website",
    locale: "en_AE",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Sharjah" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Branding Agency in Sharjah",
    description: "Top-rated Branding company in Sharjah. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInSharjahPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
