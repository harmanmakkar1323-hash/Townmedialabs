import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["chandigarh"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Chandigarh",
  description: "Top-rated lead generation company in Chandigarh. TML offers expert lead generation services for 500+ businesses across Punjab. Get a free lead generation consultation today.",
  keywords: ["best lead generation agency chandigarh", "lead generation company chandigarh", "lead generation services chandigarh", "best lead generation chandigarh", "top lead generation agency chandigarh"],
  alternates: {
    canonical: "https://townmedialabs.com/services/lead-generation-in-chandigarh/",
  },
  openGraph: {
    title: "Best Lead Generation Agency in Chandigarh",
    description: "Top-rated lead generation company in Chandigarh. TML offers expert lead generation services for 500+ businesses across Punjab. Get a free lead generation consultation today.",
    url: "https://townmedialabs.com/services/lead-generation-in-chandigarh/",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Lead Generation Agency in Chandigarh" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Lead Generation Agency in Chandigarh",
    description: "Top-rated lead generation company in Chandigarh. TML offers expert lead generation services for 500+ businesses across Punjab. Get a free lead generation consultation today.",
    images: ["/og-image.png"],
  },
};
export default function UleadUgenerationUinUchandigarhPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
