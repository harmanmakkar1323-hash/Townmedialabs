import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["newcastle"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Newcastle",
  description: "Top-rated Social Media Marketing company in Newcastle. TML offers expert Social Media Marketing services for 500+ businesses. Get a free Social Media Marketing consultation today.",
  keywords: ["social media marketing newcastle", "social media marketing agency newcastle", "social media marketing company newcastle"],
  alternates: {
    canonical: "https://townmedialabs.com/services/social-media-marketing-in-newcastle",
  },
  openGraph: {
    title: "Best Social Media Marketing Agency in Newcastle",
    description: "Top-rated Social Media Marketing company in Newcastle. TML offers expert Social Media Marketing services for 500+ businesses. Get a free Social Media Marketing consultation today.",
    url: "https://townmedialabs.com/services/social-media-marketing-in-newcastle",
    siteName: "TML Agency",
    type: "website",
    locale: "en_GB",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Social Media Marketing Agency in Newcastle" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Social Media Marketing Agency in Newcastle",
    description: "Top-rated Social Media Marketing company in Newcastle. TML offers expert Social Media Marketing services for 500+ businesses. Get a free Social Media Marketing consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SocialMediaInNewcastlePage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
