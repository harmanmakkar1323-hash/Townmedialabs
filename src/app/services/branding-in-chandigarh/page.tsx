import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["chandigarh"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Chandigarh",
  description: "Top-rated branding company in Chandigarh. TML offers expert branding services for 500+ businesses across Punjab. Get a free branding consultation today.",
  keywords: ["best branding agency chandigarh", "branding company chandigarh", "branding services chandigarh", "best branding chandigarh", "top branding agency chandigarh"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-chandigarh/",
  },
  openGraph: {
    title: "Best Branding Agency in Chandigarh",
    description: "Top-rated branding company in Chandigarh. TML offers expert branding services for 500+ businesses across Punjab. Get a free branding consultation today.",
    url: "https://townmedialabs.com/services/branding-in-chandigarh/",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Chandigarh" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Branding Agency in Chandigarh",
    description: "Top-rated branding company in Chandigarh. TML offers expert branding services for 500+ businesses across Punjab. Get a free branding consultation today.",
    images: ["/og-image.png"],
  },
};
export default function UbrandingUinUchandigarhPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
