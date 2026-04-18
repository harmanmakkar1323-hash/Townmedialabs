import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["amritsar"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Amritsar",
  description: "Top-rated Social Media Marketing company in Amritsar. TML offers expert Social Media Marketing services for 500+ businesses. Get a free Social Media Marketing consultation today.",
  keywords: ["social media marketing amritsar", "social media marketing agency amritsar", "social media marketing company amritsar"],
  alternates: {
    canonical: "https://townmedialabs.com/services/social-media-marketing-in-amritsar",
  },
  openGraph: {
    title: "Best Social Media Marketing Agency in Amritsar",
    description: "Top-rated Social Media Marketing company in Amritsar. TML offers expert Social Media Marketing services for 500+ businesses. Get a free Social Media Marketing consultation today.",
    url: "https://townmedialabs.com/services/social-media-marketing-in-amritsar",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Social Media Marketing Agency in Amritsar" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Social Media Marketing Agency in Amritsar",
    description: "Top-rated Social Media Marketing company in Amritsar. TML offers expert Social Media Marketing services for 500+ businesses. Get a free Social Media Marketing consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SocialmediaInAmritsarPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
