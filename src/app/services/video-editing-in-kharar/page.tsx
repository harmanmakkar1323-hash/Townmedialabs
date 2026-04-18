import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["kharar"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Kharar",
  description: "Top-rated Video Editing company in Kharar. TML offers expert Video Editing services for 500+ businesses. Get a free Video Editing consultation today.",
  keywords: ["video editing kharar", "video editing agency kharar", "video editing company kharar"],
  alternates: {
    canonical: "https://townmedialabs.com/services/video-editing-in-kharar",
  },
  openGraph: {
    title: "Best Video Editing Agency in Kharar",
    description: "Top-rated Video Editing company in Kharar. TML offers expert Video Editing services for 500+ businesses. Get a free Video Editing consultation today.",
    url: "https://townmedialabs.com/services/video-editing-in-kharar",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Kharar" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Video Editing Agency in Kharar",
    description: "Top-rated Video Editing company in Kharar. TML offers expert Video Editing services for 500+ businesses. Get a free Video Editing consultation today.",
    images: ["/og-image.png"],
  },
};

export default function VideoeditingInKhararPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
