import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["wolverhampton"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Wolverhampton",
  description: "Top-rated Social Media Marketing company in Wolverhampton. TML offers expert Social Media Marketing services for 500+ businesses. Get a free Social Media Marketing consultation today.",
  keywords: ["social media marketing wolverhampton", "social media marketing agency wolverhampton", "social media marketing company wolverhampton"],
  alternates: {
    canonical: "https://townmedialabs.com/services/social-media-marketing-in-wolverhampton",
  },
  openGraph: {
    title: "Best Social Media Marketing Agency in Wolverhampton",
    description: "Top-rated Social Media Marketing company in Wolverhampton. TML offers expert Social Media Marketing services for 500+ businesses. Get a free Social Media Marketing consultation today.",
    url: "https://townmedialabs.com/services/social-media-marketing-in-wolverhampton",
    siteName: "TML Agency",
    type: "website",
    locale: "en_GB",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Social Media Marketing Agency in Wolverhampton" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Social Media Marketing Agency in Wolverhampton",
    description: "Top-rated Social Media Marketing company in Wolverhampton. TML offers expert Social Media Marketing services for 500+ businesses. Get a free Social Media Marketing consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SocialMediaInWolverhamptonPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
