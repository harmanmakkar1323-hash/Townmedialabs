import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["hamilton"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Hamilton",
  description: "Top-rated Music Release company in Hamilton. TML offers expert Music Release services for 500+ businesses. Get a free Music Release consultation today.",
  keywords: ["music release hamilton", "music release agency hamilton", "music release hamilton ontario"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-hamilton",
  },
  openGraph: {
    title: "Best Music Release Agency in Hamilton",
    description: "Top-rated Music Release company in Hamilton. TML offers expert Music Release services for 500+ businesses. Get a free Music Release consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-hamilton",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Hamilton" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Music Release Agency in Hamilton",
    description: "Top-rated Music Release company in Hamilton. TML offers expert Music Release services for 500+ businesses. Get a free Music Release consultation today.",
    images: ["/og-image.png"],
  },
};

export default function MusicReleaseInHamiltonPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
