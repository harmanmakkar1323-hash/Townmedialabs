import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["mumbai"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Mumbai",
  description: "Top-rated Lead Generation company in Mumbai. TML offers expert Lead Generation services for 500+ businesses. Get a free Lead Generation consultation today.",
  keywords: ["lead generation mumbai", "lead generation agency mumbai", "lead generation company mumbai"],
  alternates: {
    canonical: "https://townmedialabs.com/services/lead-generation-in-mumbai",
  },
  openGraph: {
    title: "Best Lead Generation Agency in Mumbai",
    description: "Top-rated Lead Generation company in Mumbai. TML offers expert Lead Generation services for 500+ businesses. Get a free Lead Generation consultation today.",
    url: "https://townmedialabs.com/services/lead-generation-in-mumbai",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Lead Generation Agency in Mumbai" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Lead Generation Agency in Mumbai",
    description: "Top-rated Lead Generation company in Mumbai. TML offers expert Lead Generation services for 500+ businesses. Get a free Lead Generation consultation today.",
    images: ["/og-image.png"],
  },
};

export default function LeadGenerationInMumbaiPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
