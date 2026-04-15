import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["chandigarh"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Chandigarh",
  description: "Top-rated packaging design company in Chandigarh. TML offers expert packaging design services for 500+ businesses across Punjab. Get a free packaging design consultation today.",
  keywords: ["best packaging design agency chandigarh", "packaging design company chandigarh", "packaging design services chandigarh", "best packaging design chandigarh", "top packaging design agency chandigarh"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-chandigarh/",
  },
  openGraph: {
    title: "Best Packaging Design Agency in Chandigarh",
    description: "Top-rated packaging design company in Chandigarh. TML offers expert packaging design services for 500+ businesses across Punjab. Get a free packaging design consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-chandigarh/",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Packaging Design Agency in Chandigarh" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Packaging Design Agency in Chandigarh",
    description: "Top-rated packaging design company in Chandigarh. TML offers expert packaging design services for 500+ businesses across Punjab. Get a free packaging design consultation today.",
    images: ["/og-image.png"],
  },
};
export default function UbrandingUpackagingUinUchandigarhPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
