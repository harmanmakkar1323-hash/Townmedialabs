import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["lucknow"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Lucknow",
  description: "Top-rated Lead Generation company in Lucknow. TML offers expert Lead Generation services for 500+ businesses. Get a free Lead Generation consultation today.",
  keywords: ["lead generation lucknow", "lead generation agency lucknow", "lead generation company lucknow"],
  alternates: {
    canonical: "https://townmedialabs.com/services/lead-generation-in-lucknow",
  },
  openGraph: {
    title: "Best Lead Generation Agency in Lucknow",
    description: "Top-rated Lead Generation company in Lucknow. TML offers expert Lead Generation services for 500+ businesses. Get a free Lead Generation consultation today.",
    url: "https://townmedialabs.com/services/lead-generation-in-lucknow",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Lead Generation Agency in Lucknow" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Lead Generation Agency in Lucknow",
    description: "Top-rated Lead Generation company in Lucknow. TML offers expert Lead Generation services for 500+ businesses. Get a free Lead Generation consultation today.",
    images: ["/og-image.png"],
  },
};

export default function LeadgenerationInLucknowPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
