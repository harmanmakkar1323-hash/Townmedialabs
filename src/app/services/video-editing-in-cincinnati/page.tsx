import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["cincinnati"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Cincinnati",
  description: "Top-rated Video Editing company in Cincinnati. TML offers expert Video Editing services for 500+ businesses. Get a free Video Editing consultation today.",
  keywords: ["video editing cincinnati", "video editing agency cincinnati", "video editing company cincinnati"],
  alternates: {
    canonical: "https://townmedialabs.com/services/video-editing-in-cincinnati",
  },
  openGraph: {
    title: "Best Video Editing Agency in Cincinnati",
    description: "Top-rated Video Editing company in Cincinnati. TML offers expert Video Editing services for 500+ businesses. Get a free Video Editing consultation today.",
    url: "https://townmedialabs.com/services/video-editing-in-cincinnati",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Cincinnati" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Video Editing Agency in Cincinnati",
    description: "Top-rated Video Editing company in Cincinnati. TML offers expert Video Editing services for 500+ businesses. Get a free Video Editing consultation today.",
    images: ["/og-image.png"],
  },
};

export default function VideoEditingInCincinnatiPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
