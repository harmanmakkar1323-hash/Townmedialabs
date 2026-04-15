import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["adelaide"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Adelaide",
  description: "Top-rated Music Release company in Adelaide. TML offers expert Music Release services for 500+ businesses. Get a free Music Release consultation today.",
  keywords: ["music release adelaide", "music release agency adelaide", "music release company adelaide"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-adelaide",
  },
  openGraph: {
    title: "Best Music Release Agency in Adelaide",
    description: "Top-rated Music Release company in Adelaide. TML offers expert Music Release services for 500+ businesses. Get a free Music Release consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-adelaide",
    siteName: "TML Agency",
    type: "website",
    locale: "en_AU",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Adelaide" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Music Release Agency in Adelaide",
    description: "Top-rated Music Release company in Adelaide. TML offers expert Music Release services for 500+ businesses. Get a free Music Release consultation today.",
    images: ["/og-image.png"],
  },
};

export default function MusicReleaseInAdelaidePage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
