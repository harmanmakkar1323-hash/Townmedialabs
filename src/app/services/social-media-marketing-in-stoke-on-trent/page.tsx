import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["stoke_on_trent"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Stoke-on-Trent",
  description: "Top-rated Social Media Marketing company in Stoke-on-Trent. TML offers expert Social Media Marketing services for 500+ businesses. Get a free Social Media Marketing consultation today.",
  keywords: ["social media marketing stoke-on-trent", "social media marketing agency stoke-on-trent", "social media marketing company stoke-on-trent"],
  alternates: {
    canonical: "https://townmedialabs.com/services/social-media-marketing-in-stoke-on-trent",
  },
  openGraph: {
    title: "Best Social Media Marketing Agency in Stoke-on-Trent",
    description: "Top-rated Social Media Marketing company in Stoke-on-Trent. TML offers expert Social Media Marketing services for 500+ businesses. Get a free Social Media Marketing consultation today.",
    url: "https://townmedialabs.com/services/social-media-marketing-in-stoke-on-trent",
    siteName: "TML Agency",
    type: "website",
    locale: "en_GB",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Social Media Marketing Agency in Stoke-on-Trent" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Social Media Marketing Agency in Stoke-on-Trent",
    description: "Top-rated Social Media Marketing company in Stoke-on-Trent. TML offers expert Social Media Marketing services for 500+ businesses. Get a free Social Media Marketing consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SocialMediaInStokeOnTrentPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
