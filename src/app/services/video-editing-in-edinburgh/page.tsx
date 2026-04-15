import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["edinburgh"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Edinburgh",
  description: "Top-rated Video Editing company in Edinburgh. TML offers expert Video Editing services for 500+ businesses. Get a free Video Editing consultation today.",
  keywords: ["video editing edinburgh", "video editing agency edinburgh", "video editing company edinburgh"],
  alternates: {
    canonical: "https://townmedialabs.com/services/video-editing-in-edinburgh",
  },
  openGraph: {
    title: "Best Video Editing Agency in Edinburgh",
    description: "Top-rated Video Editing company in Edinburgh. TML offers expert Video Editing services for 500+ businesses. Get a free Video Editing consultation today.",
    url: "https://townmedialabs.com/services/video-editing-in-edinburgh",
    siteName: "TML Agency",
    type: "website",
    locale: "en_GB",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Edinburgh" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Video Editing Agency in Edinburgh",
    description: "Top-rated Video Editing company in Edinburgh. TML offers expert Video Editing services for 500+ businesses. Get a free Video Editing consultation today.",
    images: ["/og-image.png"],
  },
};

export default function VideoEditingInEdinburghPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
