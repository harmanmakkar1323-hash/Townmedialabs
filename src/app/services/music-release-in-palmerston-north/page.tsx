import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["palmerston_north"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Palmerston North",
  description: "Top-rated Music Release company in Palmerston North. TML offers expert Music Release services for 500+ businesses. Get a free Music Release consultation today.",
  keywords: ["music release palmerston north", "music release agency palmerston north", "music release palmerston north nz"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-palmerston-north",
  },
  openGraph: {
    title: "Best Music Release Agency in Palmerston North",
    description: "Top-rated Music Release company in Palmerston North. TML offers expert Music Release services for 500+ businesses. Get a free Music Release consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-palmerston-north",
    siteName: "TML Agency",
    type: "website",
    locale: "en_NZ",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Palmerston North" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Music Release Agency in Palmerston North",
    description: "Top-rated Music Release company in Palmerston North. TML offers expert Music Release services for 500+ businesses. Get a free Music Release consultation today.",
    images: ["/og-image.png"],
  },
};

export default function MusicReleaseInPalmerstonNorthPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
