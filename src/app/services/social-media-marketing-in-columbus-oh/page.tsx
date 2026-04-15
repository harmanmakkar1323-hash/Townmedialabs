import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["columbus_oh"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Columbus",
  description: "Top-rated Social Media Marketing company in Columbus. TML offers expert Social Media Marketing services for 500+ businesses. Get a free Social Media Marketing consultation today.",
  keywords: ["social media marketing columbus", "social media marketing agency columbus", "social media marketing company columbus"],
  alternates: {
    canonical: "https://townmedialabs.com/services/social-media-marketing-in-columbus-oh",
  },
  openGraph: {
    title: "Best Social Media Marketing Agency in Columbus",
    description: "Top-rated Social Media Marketing company in Columbus. TML offers expert Social Media Marketing services for 500+ businesses. Get a free Social Media Marketing consultation today.",
    url: "https://townmedialabs.com/services/social-media-marketing-in-columbus-oh",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Social Media Marketing Agency in Columbus" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Social Media Marketing Agency in Columbus",
    description: "Top-rated Social Media Marketing company in Columbus. TML offers expert Social Media Marketing services for 500+ businesses. Get a free Social Media Marketing consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SocialMediaInColumbusOhPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
