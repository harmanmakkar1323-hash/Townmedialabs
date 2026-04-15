import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["los_angeles"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Los Angeles",
  description: "Top-rated Video Editing company in Los Angeles. TML offers expert Video Editing services for 500+ businesses. Get a free Video Editing consultation today.",
  keywords: ["video editing los angeles", "video editing agency los angeles", "video editing company los angeles"],
  alternates: {
    canonical: "https://townmedialabs.com/services/video-editing-in-los-angeles",
  },
  openGraph: {
    title: "Best Video Editing Agency in Los Angeles",
    description: "Top-rated Video Editing company in Los Angeles. TML offers expert Video Editing services for 500+ businesses. Get a free Video Editing consultation today.",
    url: "https://townmedialabs.com/services/video-editing-in-los-angeles",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Los Angeles" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Video Editing Agency in Los Angeles",
    description: "Top-rated Video Editing company in Los Angeles. TML offers expert Video Editing services for 500+ businesses. Get a free Video Editing consultation today.",
    images: ["/og-image.png"],
  },
};

export default function VideoEditingInLosAngelesPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
