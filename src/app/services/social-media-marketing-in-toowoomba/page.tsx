import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["toowoomba"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Toowoomba",
  description: "Top-rated Social Media Marketing company in Toowoomba. TML offers expert Social Media Marketing services for 500+ businesses. Get a free Social Media Marketing consultation today.",
  keywords: ["social media marketing toowoomba", "social media marketing agency toowoomba", "social media marketing company toowoomba"],
  alternates: {
    canonical: "https://townmedialabs.com/services/social-media-marketing-in-toowoomba",
  },
  openGraph: {
    title: "Best Social Media Marketing Agency in Toowoomba",
    description: "Top-rated Social Media Marketing company in Toowoomba. TML offers expert Social Media Marketing services for 500+ businesses. Get a free Social Media Marketing consultation today.",
    url: "https://townmedialabs.com/services/social-media-marketing-in-toowoomba",
    siteName: "TML Agency",
    type: "website",
    locale: "en_AU",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Social Media Marketing Agency in Toowoomba" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Social Media Marketing Agency in Toowoomba",
    description: "Top-rated Social Media Marketing company in Toowoomba. TML offers expert Social Media Marketing services for 500+ businesses. Get a free Social Media Marketing consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SocialMediaInToowoombaPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
