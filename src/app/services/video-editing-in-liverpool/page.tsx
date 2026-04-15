import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["liverpool"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Liverpool",
  description: "Top-rated Video Editing company in Liverpool. TML offers expert Video Editing services for 500+ businesses. Get a free Video Editing consultation today.",
  keywords: ["video editing liverpool", "video editing agency liverpool", "video editing company liverpool"],
  alternates: {
    canonical: "https://townmedialabs.com/services/video-editing-in-liverpool",
  },
  openGraph: {
    title: "Best Video Editing Agency in Liverpool",
    description: "Top-rated Video Editing company in Liverpool. TML offers expert Video Editing services for 500+ businesses. Get a free Video Editing consultation today.",
    url: "https://townmedialabs.com/services/video-editing-in-liverpool",
    siteName: "TML Agency",
    type: "website",
    locale: "en_GB",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Liverpool" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Video Editing Agency in Liverpool",
    description: "Top-rated Video Editing company in Liverpool. TML offers expert Video Editing services for 500+ businesses. Get a free Video Editing consultation today.",
    images: ["/og-image.png"],
  },
};

export default function VideoEditingInLiverpoolPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
