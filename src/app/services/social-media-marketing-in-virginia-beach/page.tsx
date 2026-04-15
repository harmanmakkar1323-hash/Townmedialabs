import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["virginia_beach"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Virginia Beach",
  description: "Top-rated Social Media Marketing company in Virginia Beach. TML offers expert Social Media Marketing services for 500+ businesses. Get a free Social Media Marketing consultation today.",
  keywords: ["social media marketing virginia beach", "social media marketing agency virginia beach", "social media marketing company virginia beach"],
  alternates: {
    canonical: "https://townmedialabs.com/services/social-media-marketing-in-virginia-beach",
  },
  openGraph: {
    title: "Best Social Media Marketing Agency in Virginia Beach",
    description: "Top-rated Social Media Marketing company in Virginia Beach. TML offers expert Social Media Marketing services for 500+ businesses. Get a free Social Media Marketing consultation today.",
    url: "https://townmedialabs.com/services/social-media-marketing-in-virginia-beach",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Social Media Marketing Agency in Virginia Beach" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Social Media Marketing Agency in Virginia Beach",
    description: "Top-rated Social Media Marketing company in Virginia Beach. TML offers expert Social Media Marketing services for 500+ businesses. Get a free Social Media Marketing consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SocialMediaInVirginiaBeachPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
