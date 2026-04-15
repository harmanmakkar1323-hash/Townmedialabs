import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["milton_keynes"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Milton Keynes",
  description: "Top-rated Video Editing company in Milton Keynes. TML offers expert Video Editing services for 500+ businesses. Get a free Video Editing consultation today.",
  keywords: ["video editing milton keynes", "video editing agency milton keynes", "video editing company milton keynes"],
  alternates: {
    canonical: "https://townmedialabs.com/services/video-editing-in-milton-keynes",
  },
  openGraph: {
    title: "Best Video Editing Agency in Milton Keynes",
    description: "Top-rated Video Editing company in Milton Keynes. TML offers expert Video Editing services for 500+ businesses. Get a free Video Editing consultation today.",
    url: "https://townmedialabs.com/services/video-editing-in-milton-keynes",
    siteName: "TML Agency",
    type: "website",
    locale: "en_GB",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Milton Keynes" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Video Editing Agency in Milton Keynes",
    description: "Top-rated Video Editing company in Milton Keynes. TML offers expert Video Editing services for 500+ businesses. Get a free Video Editing consultation today.",
    images: ["/og-image.png"],
  },
};

export default function VideoEditingInMiltonKeynesPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
