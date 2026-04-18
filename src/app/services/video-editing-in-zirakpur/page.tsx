import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["zirakpur"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Zirakpur",
  description: "Top-rated Video Editing company in Zirakpur. TML offers expert Video Editing services for 500+ businesses. Get a free Video Editing consultation today.",
  keywords: ["video editing zirakpur", "video editing agency zirakpur", "video editing company zirakpur"],
  alternates: {
    canonical: "https://townmedialabs.com/services/video-editing-in-zirakpur",
  },
  openGraph: {
    title: "Best Video Editing Agency in Zirakpur",
    description: "Top-rated Video Editing company in Zirakpur. TML offers expert Video Editing services for 500+ businesses. Get a free Video Editing consultation today.",
    url: "https://townmedialabs.com/services/video-editing-in-zirakpur",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Zirakpur" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Video Editing Agency in Zirakpur",
    description: "Top-rated Video Editing company in Zirakpur. TML offers expert Video Editing services for 500+ businesses. Get a free Video Editing consultation today.",
    images: ["/og-image.png"],
  },
};

export default function VideoEditingInZirakpurPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
