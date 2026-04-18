import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["gurgaon"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Gurgaon",
  description: "Top-rated Video Editing company in Gurgaon. TML offers expert Video Editing services for 500+ businesses. Get a free Video Editing consultation today.",
  keywords: ["video editing gurgaon", "video editing agency gurgaon", "video editing company gurgaon"],
  alternates: {
    canonical: "https://townmedialabs.com/services/video-editing-in-gurgaon",
  },
  openGraph: {
    title: "Best Video Editing Agency in Gurgaon",
    description: "Top-rated Video Editing company in Gurgaon. TML offers expert Video Editing services for 500+ businesses. Get a free Video Editing consultation today.",
    url: "https://townmedialabs.com/services/video-editing-in-gurgaon",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Gurgaon" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Video Editing Agency in Gurgaon",
    description: "Top-rated Video Editing company in Gurgaon. TML offers expert Video Editing services for 500+ businesses. Get a free Video Editing consultation today.",
    images: ["/og-image.png"],
  },
};

export default function VideoeditingInGurgaonPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
