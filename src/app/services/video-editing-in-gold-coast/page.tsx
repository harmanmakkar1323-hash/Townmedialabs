import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["gold_coast"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Gold Coast",
  description: "Top-rated Video Editing company in Gold Coast. TML offers expert Video Editing services for 500+ businesses. Get a free Video Editing consultation today.",
  keywords: ["video editing gold coast", "video editing agency gold coast", "video editing company gold coast"],
  alternates: {
    canonical: "https://townmedialabs.com/services/video-editing-in-gold-coast",
  },
  openGraph: {
    title: "Best Video Editing Agency in Gold Coast",
    description: "Top-rated Video Editing company in Gold Coast. TML offers expert Video Editing services for 500+ businesses. Get a free Video Editing consultation today.",
    url: "https://townmedialabs.com/services/video-editing-in-gold-coast",
    siteName: "TML Agency",
    type: "website",
    locale: "en_AU",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Gold Coast" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Video Editing Agency in Gold Coast",
    description: "Top-rated Video Editing company in Gold Coast. TML offers expert Video Editing services for 500+ businesses. Get a free Video Editing consultation today.",
    images: ["/og-image.png"],
  },
};

export default function VideoEditingInGoldCoastPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
