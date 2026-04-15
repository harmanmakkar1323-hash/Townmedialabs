import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["rockhampton"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Rockhampton",
  description: "Top-rated Music Release company in Rockhampton. TML offers expert Music Release services for 500+ businesses. Get a free Music Release consultation today.",
  keywords: ["music release rockhampton", "music release agency rockhampton", "music release company rockhampton"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-rockhampton",
  },
  openGraph: {
    title: "Best Music Release Agency in Rockhampton",
    description: "Top-rated Music Release company in Rockhampton. TML offers expert Music Release services for 500+ businesses. Get a free Music Release consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-rockhampton",
    siteName: "TML Agency",
    type: "website",
    locale: "en_AU",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Rockhampton" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Music Release Agency in Rockhampton",
    description: "Top-rated Music Release company in Rockhampton. TML offers expert Music Release services for 500+ businesses. Get a free Music Release consultation today.",
    images: ["/og-image.png"],
  },
};

export default function MusicReleaseInRockhamptonPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
