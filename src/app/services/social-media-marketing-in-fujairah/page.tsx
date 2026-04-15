import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["fujairah"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Fujairah",
  description: "Top-rated Social Media Marketing company in Fujairah. TML offers expert Social Media Marketing services for 500+ businesses. Get a free Social Media Marketing consultation today.",
  keywords: ["social media marketing fujairah", "social media marketing agency fujairah", "social media marketing company fujairah"],
  alternates: {
    canonical: "https://townmedialabs.com/services/social-media-marketing-in-fujairah",
  },
  openGraph: {
    title: "Best Social Media Marketing Agency in Fujairah",
    description: "Top-rated Social Media Marketing company in Fujairah. TML offers expert Social Media Marketing services for 500+ businesses. Get a free Social Media Marketing consultation today.",
    url: "https://townmedialabs.com/services/social-media-marketing-in-fujairah",
    siteName: "TML Agency",
    type: "website",
    locale: "en_AE",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Social Media Marketing Agency in Fujairah" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Social Media Marketing Agency in Fujairah",
    description: "Top-rated Social Media Marketing company in Fujairah. TML offers expert Social Media Marketing services for 500+ businesses. Get a free Social Media Marketing consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SocialMediaInFujairahPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
