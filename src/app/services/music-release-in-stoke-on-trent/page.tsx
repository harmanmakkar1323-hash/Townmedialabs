import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["stoke_on_trent"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Stoke-on-Trent",
  description: "Top-rated Music Release company in Stoke-on-Trent. TML offers expert Music Release services for 500+ businesses. Get a free Music Release consultation today.",
  keywords: ["music release stoke-on-trent", "music release agency stoke-on-trent", "music release company stoke-on-trent"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-stoke-on-trent",
  },
  openGraph: {
    title: "Best Music Release Agency in Stoke-on-Trent",
    description: "Top-rated Music Release company in Stoke-on-Trent. TML offers expert Music Release services for 500+ businesses. Get a free Music Release consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-stoke-on-trent",
    siteName: "TML Agency",
    type: "website",
    locale: "en_GB",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Stoke-on-Trent" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Music Release Agency in Stoke-on-Trent",
    description: "Top-rated Music Release company in Stoke-on-Trent. TML offers expert Music Release services for 500+ businesses. Get a free Music Release consultation today.",
    images: ["/og-image.png"],
  },
};

export default function MusicReleaseInStokeOnTrentPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
