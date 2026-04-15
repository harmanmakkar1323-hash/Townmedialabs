import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["ballarat"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Ballarat",
  description: "Top-rated Social Media Marketing company in Ballarat. TML offers expert Social Media Marketing services for 500+ businesses. Get a free Social Media Marketing consultation today.",
  keywords: ["social media marketing ballarat", "social media marketing agency ballarat", "social media marketing company ballarat"],
  alternates: {
    canonical: "https://townmedialabs.com/services/social-media-marketing-in-ballarat",
  },
  openGraph: {
    title: "Best Social Media Marketing Agency in Ballarat",
    description: "Top-rated Social Media Marketing company in Ballarat. TML offers expert Social Media Marketing services for 500+ businesses. Get a free Social Media Marketing consultation today.",
    url: "https://townmedialabs.com/services/social-media-marketing-in-ballarat",
    siteName: "TML Agency",
    type: "website",
    locale: "en_AU",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Social Media Marketing Agency in Ballarat" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Social Media Marketing Agency in Ballarat",
    description: "Top-rated Social Media Marketing company in Ballarat. TML offers expert Social Media Marketing services for 500+ businesses. Get a free Social Media Marketing consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SocialMediaInBallaratPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
