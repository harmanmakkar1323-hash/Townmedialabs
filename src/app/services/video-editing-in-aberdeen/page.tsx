import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["aberdeen"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Aberdeen",
  description: "Top-rated Video Editing company in Aberdeen. TML offers expert Video Editing services for 500+ businesses. Get a free Video Editing consultation today.",
  keywords: ["video editing aberdeen", "video editing agency aberdeen", "video editing company aberdeen"],
  alternates: {
    canonical: "https://townmedialabs.com/services/video-editing-in-aberdeen",
  },
  openGraph: {
    title: "Best Video Editing Agency in Aberdeen",
    description: "Top-rated Video Editing company in Aberdeen. TML offers expert Video Editing services for 500+ businesses. Get a free Video Editing consultation today.",
    url: "https://townmedialabs.com/services/video-editing-in-aberdeen",
    siteName: "TML Agency",
    type: "website",
    locale: "en_GB",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Aberdeen" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Video Editing Agency in Aberdeen",
    description: "Top-rated Video Editing company in Aberdeen. TML offers expert Video Editing services for 500+ businesses. Get a free Video Editing consultation today.",
    images: ["/og-image.png"],
  },
};

export default function VideoEditingInAberdeenPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
