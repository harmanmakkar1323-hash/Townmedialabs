import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["pittsburgh"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Pittsburgh",
  description: "Top-rated Video Editing company in Pittsburgh. TML offers expert Video Editing services for 500+ businesses. Get a free Video Editing consultation today.",
  keywords: ["video editing pittsburgh", "video editing agency pittsburgh", "video editing company pittsburgh"],
  alternates: {
    canonical: "https://townmedialabs.com/services/video-editing-in-pittsburgh",
  },
  openGraph: {
    title: "Best Video Editing Agency in Pittsburgh",
    description: "Top-rated Video Editing company in Pittsburgh. TML offers expert Video Editing services for 500+ businesses. Get a free Video Editing consultation today.",
    url: "https://townmedialabs.com/services/video-editing-in-pittsburgh",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Pittsburgh" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Video Editing Agency in Pittsburgh",
    description: "Top-rated Video Editing company in Pittsburgh. TML offers expert Video Editing services for 500+ businesses. Get a free Video Editing consultation today.",
    images: ["/og-image.png"],
  },
};

export default function VideoEditingInPittsburghPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
