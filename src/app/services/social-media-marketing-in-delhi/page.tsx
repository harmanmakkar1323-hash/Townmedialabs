import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["delhi"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Delhi",
  description: "Top-rated Social Media Marketing company in Delhi. TML offers expert Social Media Marketing services for 500+ businesses. Get a free Social Media Marketing consultation today.",
  keywords: ["social media marketing delhi", "social media marketing agency delhi", "social media marketing company delhi"],
  alternates: {
    canonical: "https://townmedialabs.com/services/social-media-marketing-in-delhi",
  },
  openGraph: {
    title: "Best Social Media Marketing Agency in Delhi",
    description: "Top-rated Social Media Marketing company in Delhi. TML offers expert Social Media Marketing services for 500+ businesses. Get a free Social Media Marketing consultation today.",
    url: "https://townmedialabs.com/services/social-media-marketing-in-delhi",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Social Media Marketing Agency in Delhi" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Social Media Marketing Agency in Delhi",
    description: "Top-rated Social Media Marketing company in Delhi. TML offers expert Social Media Marketing services for 500+ businesses. Get a free Social Media Marketing consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SocialMediaMarketingInDelhiPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
