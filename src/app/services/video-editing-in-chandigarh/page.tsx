import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["chandigarh"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Chandigarh",
  description: "Top-rated video editing company in Chandigarh. TML offers expert video editing services for 500+ businesses across Punjab. Get a free video editing consultation today.",
  keywords: ["best video editing agency chandigarh", "video editing company chandigarh", "video editing services chandigarh", "best video editing chandigarh", "top video editing agency chandigarh"],
  alternates: {
    canonical: "https://townmedialabs.com/services/video-editing-in-chandigarh/",
  },
  openGraph: {
    title: "Best Video Editing Agency in Chandigarh",
    description: "Top-rated video editing company in Chandigarh. TML offers expert video editing services for 500+ businesses across Punjab. Get a free video editing consultation today.",
    url: "https://townmedialabs.com/services/video-editing-in-chandigarh/",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Chandigarh" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Video Editing Agency in Chandigarh",
    description: "Top-rated video editing company in Chandigarh. TML offers expert video editing services for 500+ businesses across Punjab. Get a free video editing consultation today.",
    images: ["/og-image.png"],
  },
};
export default function UvideoUeditingUinUchandigarhPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
