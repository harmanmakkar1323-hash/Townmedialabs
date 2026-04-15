import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["ipswich"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Ipswich",
  description: "Top-rated Social Media Marketing company in Ipswich. TML offers expert Social Media Marketing services for 500+ businesses. Get a free Social Media Marketing consultation today.",
  keywords: ["social media marketing ipswich", "social media marketing agency ipswich", "social media marketing company ipswich"],
  alternates: {
    canonical: "https://townmedialabs.com/services/social-media-marketing-in-ipswich",
  },
  openGraph: {
    title: "Best Social Media Marketing Agency in Ipswich",
    description: "Top-rated Social Media Marketing company in Ipswich. TML offers expert Social Media Marketing services for 500+ businesses. Get a free Social Media Marketing consultation today.",
    url: "https://townmedialabs.com/services/social-media-marketing-in-ipswich",
    siteName: "TML Agency",
    type: "website",
    locale: "en_GB",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Social Media Marketing Agency in Ipswich" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Social Media Marketing Agency in Ipswich",
    description: "Top-rated Social Media Marketing company in Ipswich. TML offers expert Social Media Marketing services for 500+ businesses. Get a free Social Media Marketing consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SocialMediaInIpswichPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
