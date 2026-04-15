import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["palmerston_north"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Palmerston North",
  description: "Top-rated Video Editing company in Palmerston North. TML offers expert Video Editing services for 500+ businesses. Get a free Video Editing consultation today.",
  keywords: ["video editing palmerston north", "video editing agency palmerston north", "video editing palmerston north nz"],
  alternates: {
    canonical: "https://townmedialabs.com/services/video-editing-in-palmerston-north",
  },
  openGraph: {
    title: "Best Video Editing Agency in Palmerston North",
    description: "Top-rated Video Editing company in Palmerston North. TML offers expert Video Editing services for 500+ businesses. Get a free Video Editing consultation today.",
    url: "https://townmedialabs.com/services/video-editing-in-palmerston-north",
    siteName: "TML Agency",
    type: "website",
    locale: "en_NZ",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Palmerston North" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Video Editing Agency in Palmerston North",
    description: "Top-rated Video Editing company in Palmerston North. TML offers expert Video Editing services for 500+ businesses. Get a free Video Editing consultation today.",
    images: ["/og-image.png"],
  },
};

export default function VideoEditingInPalmerstonNorthPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
