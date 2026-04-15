import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["toowoomba"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Toowoomba",
  description: "Top-rated Video Editing company in Toowoomba. TML offers expert Video Editing services for 500+ businesses. Get a free Video Editing consultation today.",
  keywords: ["video editing toowoomba", "video editing agency toowoomba", "video editing company toowoomba"],
  alternates: {
    canonical: "https://townmedialabs.com/services/video-editing-in-toowoomba",
  },
  openGraph: {
    title: "Best Video Editing Agency in Toowoomba",
    description: "Top-rated Video Editing company in Toowoomba. TML offers expert Video Editing services for 500+ businesses. Get a free Video Editing consultation today.",
    url: "https://townmedialabs.com/services/video-editing-in-toowoomba",
    siteName: "TML Agency",
    type: "website",
    locale: "en_AU",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Toowoomba" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Video Editing Agency in Toowoomba",
    description: "Top-rated Video Editing company in Toowoomba. TML offers expert Video Editing services for 500+ businesses. Get a free Video Editing consultation today.",
    images: ["/og-image.png"],
  },
};

export default function VideoEditingInToowoombaPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
