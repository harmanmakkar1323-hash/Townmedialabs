import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["karnal"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Karnal",
  description: "Top-rated Branding company in Karnal. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
  keywords: ["branding karnal", "branding agency karnal", "branding company karnal"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-karnal",
  },
  openGraph: {
    title: "Best Branding Agency in Karnal",
    description: "Top-rated Branding company in Karnal. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    url: "https://townmedialabs.com/services/branding-in-karnal",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Karnal" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Branding Agency in Karnal",
    description: "Top-rated Branding company in Karnal. TML offers expert Branding services for 500+ businesses. Get a free Branding consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInKarnalPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
