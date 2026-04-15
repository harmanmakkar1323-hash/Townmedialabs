import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["minneapolis"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Minneapolis",
  description: "Top-rated Social Media Marketing company in Minneapolis. TML offers expert Social Media Marketing services for 500+ businesses. Get a free Social Media Marketing consultation today.",
  keywords: ["social media marketing minneapolis", "social media marketing agency minneapolis", "social media marketing company minneapolis"],
  alternates: {
    canonical: "https://townmedialabs.com/services/social-media-marketing-in-minneapolis",
  },
  openGraph: {
    title: "Best Social Media Marketing Agency in Minneapolis",
    description: "Top-rated Social Media Marketing company in Minneapolis. TML offers expert Social Media Marketing services for 500+ businesses. Get a free Social Media Marketing consultation today.",
    url: "https://townmedialabs.com/services/social-media-marketing-in-minneapolis",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Social Media Marketing Agency in Minneapolis" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Social Media Marketing Agency in Minneapolis",
    description: "Top-rated Social Media Marketing company in Minneapolis. TML offers expert Social Media Marketing services for 500+ businesses. Get a free Social Media Marketing consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SocialMediaInMinneapolisPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
