import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["panipat"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Panipat",
  description: "Top-rated Video Editing company in Panipat. TML offers expert Video Editing services for 500+ businesses. Get a free Video Editing consultation today.",
  keywords: ["video editing panipat", "video editing agency panipat", "video editing company panipat"],
  alternates: {
    canonical: "https://townmedialabs.com/services/video-editing-in-panipat",
  },
  openGraph: {
    title: "Best Video Editing Agency in Panipat",
    description: "Top-rated Video Editing company in Panipat. TML offers expert Video Editing services for 500+ businesses. Get a free Video Editing consultation today.",
    url: "https://townmedialabs.com/services/video-editing-in-panipat",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Panipat" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Video Editing Agency in Panipat",
    description: "Top-rated Video Editing company in Panipat. TML offers expert Video Editing services for 500+ businesses. Get a free Video Editing consultation today.",
    images: ["/og-image.png"],
  },
};

export default function VideoeditingInPanipatPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
