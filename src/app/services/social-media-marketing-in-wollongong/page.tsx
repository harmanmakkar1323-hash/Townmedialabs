import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["wollongong"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Wollongong",
  description: "Top-rated Social Media Marketing company in Wollongong. TML offers expert Social Media Marketing services for 500+ businesses. Get a free Social Media Marketing consultation today.",
  keywords: ["social media marketing wollongong", "social media marketing agency wollongong", "social media marketing company wollongong"],
  alternates: {
    canonical: "https://townmedialabs.com/services/social-media-marketing-in-wollongong",
  },
  openGraph: {
    title: "Best Social Media Marketing Agency in Wollongong",
    description: "Top-rated Social Media Marketing company in Wollongong. TML offers expert Social Media Marketing services for 500+ businesses. Get a free Social Media Marketing consultation today.",
    url: "https://townmedialabs.com/services/social-media-marketing-in-wollongong",
    siteName: "TML Agency",
    type: "website",
    locale: "en_AU",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Social Media Marketing Agency in Wollongong" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Social Media Marketing Agency in Wollongong",
    description: "Top-rated Social Media Marketing company in Wollongong. TML offers expert Social Media Marketing services for 500+ businesses. Get a free Social Media Marketing consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SocialMediaInWollongongPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
