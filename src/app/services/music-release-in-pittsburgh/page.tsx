import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["pittsburgh"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Pittsburgh",
  description: "Top-rated Music Release company in Pittsburgh. TML offers expert Music Release services for 500+ businesses. Get a free Music Release consultation today.",
  keywords: ["music release pittsburgh", "music release agency pittsburgh", "music release company pittsburgh"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-pittsburgh",
  },
  openGraph: {
    title: "Best Music Release Agency in Pittsburgh",
    description: "Top-rated Music Release company in Pittsburgh. TML offers expert Music Release services for 500+ businesses. Get a free Music Release consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-pittsburgh",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Pittsburgh" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Music Release Agency in Pittsburgh",
    description: "Top-rated Music Release company in Pittsburgh. TML offers expert Music Release services for 500+ businesses. Get a free Music Release consultation today.",
    images: ["/og-image.png"],
  },
};

export default function MusicReleaseInPittsburghPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
