import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["indianapolis"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Indianapolis",
  description: "Top-rated Video Editing company in Indianapolis. TML offers expert Video Editing services for 500+ businesses. Get a free Video Editing consultation today.",
  keywords: ["video editing indianapolis", "video editing agency indianapolis", "video editing company indianapolis"],
  alternates: {
    canonical: "https://townmedialabs.com/services/video-editing-in-indianapolis",
  },
  openGraph: {
    title: "Best Video Editing Agency in Indianapolis",
    description: "Top-rated Video Editing company in Indianapolis. TML offers expert Video Editing services for 500+ businesses. Get a free Video Editing consultation today.",
    url: "https://townmedialabs.com/services/video-editing-in-indianapolis",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Indianapolis" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Video Editing Agency in Indianapolis",
    description: "Top-rated Video Editing company in Indianapolis. TML offers expert Video Editing services for 500+ businesses. Get a free Video Editing consultation today.",
    images: ["/og-image.png"],
  },
};

export default function VideoEditingInIndianapolisPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
