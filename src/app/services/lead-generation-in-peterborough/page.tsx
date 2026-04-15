import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["peterborough"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Peterborough",
  description: "Top-rated Lead Generation company in Peterborough. TML offers expert Lead Generation services for 500+ businesses. Get a free Lead Generation consultation today.",
  keywords: ["lead generation peterborough", "lead generation agency peterborough", "lead generation company peterborough"],
  alternates: {
    canonical: "https://townmedialabs.com/services/lead-generation-in-peterborough",
  },
  openGraph: {
    title: "Best Lead Generation Agency in Peterborough",
    description: "Top-rated Lead Generation company in Peterborough. TML offers expert Lead Generation services for 500+ businesses. Get a free Lead Generation consultation today.",
    url: "https://townmedialabs.com/services/lead-generation-in-peterborough",
    siteName: "TML Agency",
    type: "website",
    locale: "en_GB",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Lead Generation Agency in Peterborough" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Lead Generation Agency in Peterborough",
    description: "Top-rated Lead Generation company in Peterborough. TML offers expert Lead Generation services for 500+ businesses. Get a free Lead Generation consultation today.",
    images: ["/og-image.png"],
  },
};

export default function LeadGenerationInPeterboroughPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
