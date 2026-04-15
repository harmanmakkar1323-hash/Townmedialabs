import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["abu_dhabi"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Abu Dhabi",
  description: "Top-rated Video Editing company in Abu Dhabi. TML offers expert Video Editing services for 500+ businesses. Get a free Video Editing consultation today.",
  keywords: ["video editing abu dhabi", "video editing agency abu dhabi", "video editing company abu dhabi"],
  alternates: {
    canonical: "https://townmedialabs.com/services/video-editing-in-abu-dhabi",
  },
  openGraph: {
    title: "Best Video Editing Agency in Abu Dhabi",
    description: "Top-rated Video Editing company in Abu Dhabi. TML offers expert Video Editing services for 500+ businesses. Get a free Video Editing consultation today.",
    url: "https://townmedialabs.com/services/video-editing-in-abu-dhabi",
    siteName: "TML Agency",
    type: "website",
    locale: "en_AE",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Abu Dhabi" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Video Editing Agency in Abu Dhabi",
    description: "Top-rated Video Editing company in Abu Dhabi. TML offers expert Video Editing services for 500+ businesses. Get a free Video Editing consultation today.",
    images: ["/og-image.png"],
  },
};

export default function VideoEditingInAbuDhabiPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
