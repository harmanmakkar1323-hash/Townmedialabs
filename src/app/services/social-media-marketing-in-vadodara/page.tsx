import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["vadodara"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Vadodara",
  description: "Top-rated Social Media Marketing company in Vadodara. TML offers expert Social Media Marketing services for 500+ businesses. Get a free Social Media Marketing consultation today.",
  keywords: ["social media marketing vadodara", "social media marketing agency vadodara", "social media marketing company vadodara"],
  alternates: {
    canonical: "https://townmedialabs.com/services/social-media-marketing-in-vadodara",
  },
  openGraph: {
    title: "Best Social Media Marketing Agency in Vadodara",
    description: "Top-rated Social Media Marketing company in Vadodara. TML offers expert Social Media Marketing services for 500+ businesses. Get a free Social Media Marketing consultation today.",
    url: "https://townmedialabs.com/services/social-media-marketing-in-vadodara",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Social Media Marketing Agency in Vadodara" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Social Media Marketing Agency in Vadodara",
    description: "Top-rated Social Media Marketing company in Vadodara. TML offers expert Social Media Marketing services for 500+ businesses. Get a free Social Media Marketing consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SocialmediaInVadodaraPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
