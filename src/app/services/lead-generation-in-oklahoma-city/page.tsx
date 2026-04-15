import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["oklahoma_city"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Oklahoma City",
  description: "Top-rated Lead Generation company in Oklahoma City. TML offers expert Lead Generation services for 500+ businesses. Get a free Lead Generation consultation today.",
  keywords: ["lead generation oklahoma city", "lead generation agency oklahoma city", "lead generation company oklahoma city"],
  alternates: {
    canonical: "https://townmedialabs.com/services/lead-generation-in-oklahoma-city",
  },
  openGraph: {
    title: "Best Lead Generation Agency in Oklahoma City",
    description: "Top-rated Lead Generation company in Oklahoma City. TML offers expert Lead Generation services for 500+ businesses. Get a free Lead Generation consultation today.",
    url: "https://townmedialabs.com/services/lead-generation-in-oklahoma-city",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Lead Generation Agency in Oklahoma City" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Lead Generation Agency in Oklahoma City",
    description: "Top-rated Lead Generation company in Oklahoma City. TML offers expert Lead Generation services for 500+ businesses. Get a free Lead Generation consultation today.",
    images: ["/og-image.png"],
  },
};

export default function LeadGenerationInOklahomaCityPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
