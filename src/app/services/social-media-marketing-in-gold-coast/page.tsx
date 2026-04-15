import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["gold_coast"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Gold Coast",
  description: "Top-rated Social Media Marketing company in Gold Coast. TML offers expert Social Media Marketing services for 500+ businesses. Get a free Social Media Marketing consultation today.",
  keywords: ["social media marketing gold coast", "social media marketing agency gold coast", "social media marketing company gold coast"],
  alternates: {
    canonical: "https://townmedialabs.com/services/social-media-marketing-in-gold-coast",
  },
  openGraph: {
    title: "Best Social Media Marketing Agency in Gold Coast",
    description: "Top-rated Social Media Marketing company in Gold Coast. TML offers expert Social Media Marketing services for 500+ businesses. Get a free Social Media Marketing consultation today.",
    url: "https://townmedialabs.com/services/social-media-marketing-in-gold-coast",
    siteName: "TML Agency",
    type: "website",
    locale: "en_AU",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Social Media Marketing Agency in Gold Coast" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Social Media Marketing Agency in Gold Coast",
    description: "Top-rated Social Media Marketing company in Gold Coast. TML offers expert Social Media Marketing services for 500+ businesses. Get a free Social Media Marketing consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SocialMediaInGoldCoastPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
