import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["aberdeen"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Aberdeen",
  description: "Top-rated Music Release company in Aberdeen. TML offers expert Music Release services for 500+ businesses. Get a free Music Release consultation today.",
  keywords: ["music release aberdeen", "music release agency aberdeen", "music release company aberdeen"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-aberdeen",
  },
  openGraph: {
    title: "Best Music Release Agency in Aberdeen",
    description: "Top-rated Music Release company in Aberdeen. TML offers expert Music Release services for 500+ businesses. Get a free Music Release consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-aberdeen",
    siteName: "TML Agency",
    type: "website",
    locale: "en_GB",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Aberdeen" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Music Release Agency in Aberdeen",
    description: "Top-rated Music Release company in Aberdeen. TML offers expert Music Release services for 500+ businesses. Get a free Music Release consultation today.",
    images: ["/og-image.png"],
  },
};

export default function MusicReleaseInAberdeenPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
