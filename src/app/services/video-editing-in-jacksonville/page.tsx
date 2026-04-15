import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["jacksonville"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Jacksonville",
  description: "Top-rated Video Editing company in Jacksonville. TML offers expert Video Editing services for 500+ businesses. Get a free Video Editing consultation today.",
  keywords: ["video editing jacksonville", "video editing agency jacksonville", "video editing company jacksonville"],
  alternates: {
    canonical: "https://townmedialabs.com/services/video-editing-in-jacksonville",
  },
  openGraph: {
    title: "Best Video Editing Agency in Jacksonville",
    description: "Top-rated Video Editing company in Jacksonville. TML offers expert Video Editing services for 500+ businesses. Get a free Video Editing consultation today.",
    url: "https://townmedialabs.com/services/video-editing-in-jacksonville",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Jacksonville" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Video Editing Agency in Jacksonville",
    description: "Top-rated Video Editing company in Jacksonville. TML offers expert Video Editing services for 500+ businesses. Get a free Video Editing consultation today.",
    images: ["/og-image.png"],
  },
};

export default function VideoEditingInJacksonvillePage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
