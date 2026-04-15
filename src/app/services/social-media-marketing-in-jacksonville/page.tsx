import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["jacksonville"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Jacksonville",
  description: "Top-rated Social Media Marketing company in Jacksonville. TML offers expert Social Media Marketing services for 500+ businesses. Get a free Social Media Marketing consultation today.",
  keywords: ["social media marketing jacksonville", "social media marketing agency jacksonville", "social media marketing company jacksonville"],
  alternates: {
    canonical: "https://townmedialabs.com/services/social-media-marketing-in-jacksonville",
  },
  openGraph: {
    title: "Best Social Media Marketing Agency in Jacksonville",
    description: "Top-rated Social Media Marketing company in Jacksonville. TML offers expert Social Media Marketing services for 500+ businesses. Get a free Social Media Marketing consultation today.",
    url: "https://townmedialabs.com/services/social-media-marketing-in-jacksonville",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Social Media Marketing Agency in Jacksonville" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Social Media Marketing Agency in Jacksonville",
    description: "Top-rated Social Media Marketing company in Jacksonville. TML offers expert Social Media Marketing services for 500+ businesses. Get a free Social Media Marketing consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SocialMediaInJacksonvillePage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
