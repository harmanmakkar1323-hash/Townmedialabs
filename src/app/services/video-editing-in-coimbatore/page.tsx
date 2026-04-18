import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["coimbatore"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Coimbatore",
  description: "Top-rated Video Editing company in Coimbatore. TML offers expert Video Editing services for 500+ businesses. Get a free Video Editing consultation today.",
  keywords: ["video editing coimbatore", "video editing agency coimbatore", "video editing company coimbatore"],
  alternates: {
    canonical: "https://townmedialabs.com/services/video-editing-in-coimbatore",
  },
  openGraph: {
    title: "Best Video Editing Agency in Coimbatore",
    description: "Top-rated Video Editing company in Coimbatore. TML offers expert Video Editing services for 500+ businesses. Get a free Video Editing consultation today.",
    url: "https://townmedialabs.com/services/video-editing-in-coimbatore",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Coimbatore" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Video Editing Agency in Coimbatore",
    description: "Top-rated Video Editing company in Coimbatore. TML offers expert Video Editing services for 500+ businesses. Get a free Video Editing consultation today.",
    images: ["/og-image.png"],
  },
};

export default function VideoeditingInCoimbatorePage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
