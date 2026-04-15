import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["ahmedabad"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Ahmedabad",
  description: "Top-rated Branding company in Ahmedabad. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
  keywords: ["branding ahmedabad", "branding agency ahmedabad", "branding company ahmedabad"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-ahmedabad",
  },
  openGraph: {
    title: "Best Branding Agency in Ahmedabad",
    description: "Top-rated Branding company in Ahmedabad. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    url: "https://townmedialabs.com/services/branding-in-ahmedabad",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Ahmedabad" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Branding Agency in Ahmedabad",
    description: "Top-rated Branding company in Ahmedabad. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInAhmedabadPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
