import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["south_delhi"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in South Delhi",
  description: "Top-rated Lead Generation company in South Delhi. TML offers expert Lead Generation services for 500+ businesses. Get a free Lead Generation consultation today.",
  keywords: ["lead generation south delhi", "lead generation agency south delhi", "lead generation company south delhi"],
  alternates: {
    canonical: "https://townmedialabs.com/services/lead-generation-in-south-delhi",
  },
  openGraph: {
    title: "Best Lead Generation Agency in South Delhi",
    description: "Top-rated Lead Generation company in South Delhi. TML offers expert Lead Generation services for 500+ businesses. Get a free Lead Generation consultation today.",
    url: "https://townmedialabs.com/services/lead-generation-in-south-delhi",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Lead Generation Agency in South Delhi" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Lead Generation Agency in South Delhi",
    description: "Top-rated Lead Generation company in South Delhi. TML offers expert Lead Generation services for 500+ businesses. Get a free Lead Generation consultation today.",
    images: ["/og-image.png"],
  },
};

export default function LeadgenerationInSouthDelhiPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
