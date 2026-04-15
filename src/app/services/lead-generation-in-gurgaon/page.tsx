import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["gurgaon"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Gurgaon",
  description: "Top-rated Lead Generation company in Gurgaon. TML offers expert Lead Generation services for 500+ businesses. Get a free Lead Generation consultation today.",
  keywords: ["lead generation gurgaon", "lead generation agency gurgaon", "lead generation company gurgaon"],
  alternates: {
    canonical: "https://townmedialabs.com/services/lead-generation-in-gurgaon",
  },
  openGraph: {
    title: "Best Lead Generation Agency in Gurgaon",
    description: "Top-rated Lead Generation company in Gurgaon. TML offers expert Lead Generation services for 500+ businesses. Get a free Lead Generation consultation today.",
    url: "https://townmedialabs.com/services/lead-generation-in-gurgaon",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Lead Generation Agency in Gurgaon" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Lead Generation Agency in Gurgaon",
    description: "Top-rated Lead Generation company in Gurgaon. TML offers expert Lead Generation services for 500+ businesses. Get a free Lead Generation consultation today.",
    images: ["/og-image.png"],
  },
};

export default function LeadgenerationInGurgaonPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
