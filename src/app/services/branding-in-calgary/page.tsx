import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["calgary"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Calgary",
  description: "Top-rated Branding company in Calgary. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
  keywords: ["branding calgary", "branding agency calgary"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-calgary",
  },
  openGraph: {
    title: "Best Branding Agency in Calgary",
    description: "Top-rated Branding company in Calgary. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    url: "https://townmedialabs.com/services/branding-in-calgary",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Calgary" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Branding Agency in Calgary",
    description: "Top-rated Branding company in Calgary. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
