import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["minneapolis"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Minneapolis",
  description: "Top-rated Music Release company in Minneapolis. TML offers expert Music Release services for 500+ businesses. Get a free Music Release consultation today.",
  keywords: ["music release minneapolis", "music release agency minneapolis", "music release company minneapolis"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-minneapolis",
  },
  openGraph: {
    title: "Best Music Release Agency in Minneapolis",
    description: "Top-rated Music Release company in Minneapolis. TML offers expert Music Release services for 500+ businesses. Get a free Music Release consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-minneapolis",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Minneapolis" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Music Release Agency in Minneapolis",
    description: "Top-rated Music Release company in Minneapolis. TML offers expert Music Release services for 500+ businesses. Get a free Music Release consultation today.",
    images: ["/og-image.png"],
  },
};

export default function MusicReleaseInMinneapolisPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
