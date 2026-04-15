import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["ras_al_khaimah"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Ras Al Khaimah",
  description: "Top-rated Social Media Marketing company in Ras Al Khaimah. TML offers expert Social Media Marketing services for 500+ businesses. Get a free Social Media Marketing consultation today.",
  keywords: ["social media marketing ras al khaimah", "social media marketing agency ras al khaimah", "social media marketing company ras al khaimah"],
  alternates: {
    canonical: "https://townmedialabs.com/services/social-media-marketing-in-ras-al-khaimah",
  },
  openGraph: {
    title: "Best Social Media Marketing Agency in Ras Al Khaimah",
    description: "Top-rated Social Media Marketing company in Ras Al Khaimah. TML offers expert Social Media Marketing services for 500+ businesses. Get a free Social Media Marketing consultation today.",
    url: "https://townmedialabs.com/services/social-media-marketing-in-ras-al-khaimah",
    siteName: "TML Agency",
    type: "website",
    locale: "en_AE",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Social Media Marketing Agency in Ras Al Khaimah" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Social Media Marketing Agency in Ras Al Khaimah",
    description: "Top-rated Social Media Marketing company in Ras Al Khaimah. TML offers expert Social Media Marketing services for 500+ businesses. Get a free Social Media Marketing consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SocialMediaInRasAlKhaimahPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
