import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["geelong"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Geelong",
  description: "Top-rated Video Editing company in Geelong. TML offers expert Video Editing services for 500+ businesses. Get a free Video Editing consultation today.",
  keywords: ["video editing geelong", "video editing agency geelong", "video editing company geelong"],
  alternates: {
    canonical: "https://townmedialabs.com/services/video-editing-in-geelong",
  },
  openGraph: {
    title: "Best Video Editing Agency in Geelong",
    description: "Top-rated Video Editing company in Geelong. TML offers expert Video Editing services for 500+ businesses. Get a free Video Editing consultation today.",
    url: "https://townmedialabs.com/services/video-editing-in-geelong",
    siteName: "TML Agency",
    type: "website",
    locale: "en_AU",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Geelong" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Video Editing Agency in Geelong",
    description: "Top-rated Video Editing company in Geelong. TML offers expert Video Editing services for 500+ businesses. Get a free Video Editing consultation today.",
    images: ["/og-image.png"],
  },
};

export default function VideoEditingInGeelongPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
