import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["las_vegas"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Las Vegas",
  description: "Top-rated Music Release company in Las Vegas. TML offers expert Music Release services for 500+ businesses. Get a free Music Release consultation today.",
  keywords: ["music release las vegas", "music release agency las vegas", "music release company las vegas"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-las-vegas",
  },
  openGraph: {
    title: "Best Music Release Agency in Las Vegas",
    description: "Top-rated Music Release company in Las Vegas. TML offers expert Music Release services for 500+ businesses. Get a free Music Release consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-las-vegas",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Las Vegas" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Music Release Agency in Las Vegas",
    description: "Top-rated Music Release company in Las Vegas. TML offers expert Music Release services for 500+ businesses. Get a free Music Release consultation today.",
    images: ["/og-image.png"],
  },
};

export default function MusicReleaseInLasVegasPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
