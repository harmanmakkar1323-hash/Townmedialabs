import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["philadelphia"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Philadelphia",
  description: "Top-rated Music Release company in Philadelphia. TML offers expert Music Release services for 500+ businesses. Get a free Music Release consultation today.",
  keywords: ["music release philadelphia", "music release agency philadelphia", "music release company philadelphia"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-philadelphia",
  },
  openGraph: {
    title: "Best Music Release Agency in Philadelphia",
    description: "Top-rated Music Release company in Philadelphia. TML offers expert Music Release services for 500+ businesses. Get a free Music Release consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-philadelphia",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Philadelphia" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Music Release Agency in Philadelphia",
    description: "Top-rated Music Release company in Philadelphia. TML offers expert Music Release services for 500+ businesses. Get a free Music Release consultation today.",
    images: ["/og-image.png"],
  },
};

export default function MusicReleaseInPhiladelphiaPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
