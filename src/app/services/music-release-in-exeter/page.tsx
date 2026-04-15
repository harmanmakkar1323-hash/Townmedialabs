import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["exeter"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Exeter",
  description: "Top-rated Music Release company in Exeter. TML offers expert Music Release services for 500+ businesses. Get a free Music Release consultation today.",
  keywords: ["music release exeter", "music release agency exeter", "music release company exeter"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-exeter",
  },
  openGraph: {
    title: "Best Music Release Agency in Exeter",
    description: "Top-rated Music Release company in Exeter. TML offers expert Music Release services for 500+ businesses. Get a free Music Release consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-exeter",
    siteName: "TML Agency",
    type: "website",
    locale: "en_GB",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Exeter" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Music Release Agency in Exeter",
    description: "Top-rated Music Release company in Exeter. TML offers expert Music Release services for 500+ businesses. Get a free Music Release consultation today.",
    images: ["/og-image.png"],
  },
};

export default function MusicReleaseInExeterPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
