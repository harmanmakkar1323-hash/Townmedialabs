import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["virginia_beach"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Virginia Beach",
  description: "Top-rated Music Release company in Virginia Beach. TML offers expert Music Release services for 500+ businesses. Get a free Music Release consultation today.",
  keywords: ["music release virginia beach", "music release agency virginia beach", "music release company virginia beach"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-virginia-beach",
  },
  openGraph: {
    title: "Best Music Release Agency in Virginia Beach",
    description: "Top-rated Music Release company in Virginia Beach. TML offers expert Music Release services for 500+ businesses. Get a free Music Release consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-virginia-beach",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Virginia Beach" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Music Release Agency in Virginia Beach",
    description: "Top-rated Music Release company in Virginia Beach. TML offers expert Music Release services for 500+ businesses. Get a free Music Release consultation today.",
    images: ["/og-image.png"],
  },
};

export default function MusicReleaseInVirginiaBeachPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
