import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["los_angeles"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Los Angeles",
  description: "Top-rated Social Media Marketing company in Los Angeles. TML offers expert Social Media Marketing services for 500+ businesses. Get a free Social Media Marketing consultation today.",
  keywords: ["social media marketing los angeles", "social media marketing agency los angeles", "social media marketing company los angeles"],
  alternates: {
    canonical: "https://townmedialabs.com/services/social-media-marketing-in-los-angeles",
  },
  openGraph: {
    title: "Best Social Media Marketing Agency in Los Angeles",
    description: "Top-rated Social Media Marketing company in Los Angeles. TML offers expert Social Media Marketing services for 500+ businesses. Get a free Social Media Marketing consultation today.",
    url: "https://townmedialabs.com/services/social-media-marketing-in-los-angeles",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Social Media Marketing Agency in Los Angeles" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Social Media Marketing Agency in Los Angeles",
    description: "Top-rated Social Media Marketing company in Los Angeles. TML offers expert Social Media Marketing services for 500+ businesses. Get a free Social Media Marketing consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SocialMediaInLosAngelesPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
