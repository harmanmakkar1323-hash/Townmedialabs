import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["wolverhampton"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Wolverhampton",
  description: "Top-rated Music Release company in Wolverhampton. TML offers expert Music Release services for 500+ businesses. Get a free Music Release consultation today.",
  keywords: ["music release wolverhampton", "music release agency wolverhampton", "music release company wolverhampton"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-wolverhampton",
  },
  openGraph: {
    title: "Best Music Release Agency in Wolverhampton",
    description: "Top-rated Music Release company in Wolverhampton. TML offers expert Music Release services for 500+ businesses. Get a free Music Release consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-wolverhampton",
    siteName: "TML Agency",
    type: "website",
    locale: "en_GB",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Wolverhampton" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Music Release Agency in Wolverhampton",
    description: "Top-rated Music Release company in Wolverhampton. TML offers expert Music Release services for 500+ businesses. Get a free Music Release consultation today.",
    images: ["/og-image.png"],
  },
};

export default function MusicReleaseInWolverhamptonPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
