import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["cleveland"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Cleveland",
  description: "Top-rated Social Media Marketing company in Cleveland. TML offers expert Social Media Marketing services for 500+ businesses. Get a free Social Media Marketing consultation today.",
  keywords: ["social media marketing cleveland", "social media marketing agency cleveland", "social media marketing company cleveland"],
  alternates: {
    canonical: "https://townmedialabs.com/services/social-media-marketing-in-cleveland",
  },
  openGraph: {
    title: "Best Social Media Marketing Agency in Cleveland",
    description: "Top-rated Social Media Marketing company in Cleveland. TML offers expert Social Media Marketing services for 500+ businesses. Get a free Social Media Marketing consultation today.",
    url: "https://townmedialabs.com/services/social-media-marketing-in-cleveland",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Social Media Marketing Agency in Cleveland" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Social Media Marketing Agency in Cleveland",
    description: "Top-rated Social Media Marketing company in Cleveland. TML offers expert Social Media Marketing services for 500+ businesses. Get a free Social Media Marketing consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SocialMediaInClevelandPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
