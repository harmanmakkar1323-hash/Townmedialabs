import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["rockhampton"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Rockhampton",
  description: "Top-rated Video Editing company in Rockhampton. TML offers expert Video Editing services for 500+ businesses. Get a free Video Editing consultation today.",
  keywords: ["video editing rockhampton", "video editing agency rockhampton", "video editing company rockhampton"],
  alternates: {
    canonical: "https://townmedialabs.com/services/video-editing-in-rockhampton",
  },
  openGraph: {
    title: "Best Video Editing Agency in Rockhampton",
    description: "Top-rated Video Editing company in Rockhampton. TML offers expert Video Editing services for 500+ businesses. Get a free Video Editing consultation today.",
    url: "https://townmedialabs.com/services/video-editing-in-rockhampton",
    siteName: "TML Agency",
    type: "website",
    locale: "en_AU",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Rockhampton" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Video Editing Agency in Rockhampton",
    description: "Top-rated Video Editing company in Rockhampton. TML offers expert Video Editing services for 500+ businesses. Get a free Video Editing consultation today.",
    images: ["/og-image.png"],
  },
};

export default function VideoEditingInRockhamptonPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
