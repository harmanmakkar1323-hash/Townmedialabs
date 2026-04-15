import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["christchurch"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Christchurch",
  description: "Top-rated Social Media Marketing company in Christchurch. TML offers expert Social Media Marketing services for 500+ businesses. Get a free Social Media Marketing consultation today.",
  keywords: ["social media marketing christchurch", "social media marketing agency christchurch", "social media marketing christchurch nz"],
  alternates: {
    canonical: "https://townmedialabs.com/services/social-media-marketing-in-christchurch",
  },
  openGraph: {
    title: "Best Social Media Marketing Agency in Christchurch",
    description: "Top-rated Social Media Marketing company in Christchurch. TML offers expert Social Media Marketing services for 500+ businesses. Get a free Social Media Marketing consultation today.",
    url: "https://townmedialabs.com/services/social-media-marketing-in-christchurch",
    siteName: "TML Agency",
    type: "website",
    locale: "en_NZ",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Social Media Marketing Agency in Christchurch" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Social Media Marketing Agency in Christchurch",
    description: "Top-rated Social Media Marketing company in Christchurch. TML offers expert Social Media Marketing services for 500+ businesses. Get a free Social Media Marketing consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SocialMediaMarketingInChristchurchPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
