import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["philadelphia"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Philadelphia",
  description: "Top-rated Video Editing company in Philadelphia. TML offers expert Video Editing services for 500+ businesses. Get a free Video Editing consultation today.",
  keywords: ["video editing philadelphia", "video editing agency philadelphia", "video editing company philadelphia"],
  alternates: {
    canonical: "https://townmedialabs.com/services/video-editing-in-philadelphia",
  },
  openGraph: {
    title: "Best Video Editing Agency in Philadelphia",
    description: "Top-rated Video Editing company in Philadelphia. TML offers expert Video Editing services for 500+ businesses. Get a free Video Editing consultation today.",
    url: "https://townmedialabs.com/services/video-editing-in-philadelphia",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Philadelphia" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Video Editing Agency in Philadelphia",
    description: "Top-rated Video Editing company in Philadelphia. TML offers expert Video Editing services for 500+ businesses. Get a free Video Editing consultation today.",
    images: ["/og-image.png"],
  },
};

export default function VideoEditingInPhiladelphiaPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
