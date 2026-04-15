import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["liverpool"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Liverpool",
  description: "Top-rated Social Media Marketing company in Liverpool. TML offers expert Social Media Marketing services for 500+ businesses. Get a free Social Media Marketing consultation today.",
  keywords: ["social media marketing liverpool", "social media marketing agency liverpool", "social media marketing company liverpool"],
  alternates: {
    canonical: "https://townmedialabs.com/services/social-media-marketing-in-liverpool",
  },
  openGraph: {
    title: "Best Social Media Marketing Agency in Liverpool",
    description: "Top-rated Social Media Marketing company in Liverpool. TML offers expert Social Media Marketing services for 500+ businesses. Get a free Social Media Marketing consultation today.",
    url: "https://townmedialabs.com/services/social-media-marketing-in-liverpool",
    siteName: "TML Agency",
    type: "website",
    locale: "en_GB",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Social Media Marketing Agency in Liverpool" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Social Media Marketing Agency in Liverpool",
    description: "Top-rated Social Media Marketing company in Liverpool. TML offers expert Social Media Marketing services for 500+ businesses. Get a free Social Media Marketing consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SocialMediaInLiverpoolPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
