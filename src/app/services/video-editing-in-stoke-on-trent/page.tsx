import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["stoke_on_trent"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Stoke-on-Trent",
  description: "Top-rated Video Editing company in Stoke-on-Trent. TML offers expert Video Editing services for 500+ businesses. Get a free Video Editing consultation today.",
  keywords: ["video editing stoke-on-trent", "video editing agency stoke-on-trent", "video editing company stoke-on-trent"],
  alternates: {
    canonical: "https://townmedialabs.com/services/video-editing-in-stoke-on-trent",
  },
  openGraph: {
    title: "Best Video Editing Agency in Stoke-on-Trent",
    description: "Top-rated Video Editing company in Stoke-on-Trent. TML offers expert Video Editing services for 500+ businesses. Get a free Video Editing consultation today.",
    url: "https://townmedialabs.com/services/video-editing-in-stoke-on-trent",
    siteName: "TML Agency",
    type: "website",
    locale: "en_GB",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Stoke-on-Trent" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Video Editing Agency in Stoke-on-Trent",
    description: "Top-rated Video Editing company in Stoke-on-Trent. TML offers expert Video Editing services for 500+ businesses. Get a free Video Editing consultation today.",
    images: ["/og-image.png"],
  },
};

export default function VideoEditingInStokeOnTrentPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
