import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["fort_worth"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Fort Worth",
  description: "Top-rated Social Media Marketing company in Fort Worth. TML offers expert Social Media Marketing services for 500+ businesses. Get a free Social Media Marketing consultation today.",
  keywords: ["social media marketing fort worth", "social media marketing agency fort worth", "social media marketing company fort worth"],
  alternates: {
    canonical: "https://townmedialabs.com/services/social-media-marketing-in-fort-worth",
  },
  openGraph: {
    title: "Best Social Media Marketing Agency in Fort Worth",
    description: "Top-rated Social Media Marketing company in Fort Worth. TML offers expert Social Media Marketing services for 500+ businesses. Get a free Social Media Marketing consultation today.",
    url: "https://townmedialabs.com/services/social-media-marketing-in-fort-worth",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Social Media Marketing Agency in Fort Worth" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Social Media Marketing Agency in Fort Worth",
    description: "Top-rated Social Media Marketing company in Fort Worth. TML offers expert Social Media Marketing services for 500+ businesses. Get a free Social Media Marketing consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SocialMediaInFortWorthPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
