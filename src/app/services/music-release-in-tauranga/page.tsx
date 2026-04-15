import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["tauranga"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Tauranga",
  description: "Top-rated Music Release company in Tauranga. TML offers expert Music Release services for 500+ businesses. Get a free Music Release consultation today.",
  keywords: ["music release tauranga", "music release agency tauranga", "music release tauranga nz"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-tauranga",
  },
  openGraph: {
    title: "Best Music Release Agency in Tauranga",
    description: "Top-rated Music Release company in Tauranga. TML offers expert Music Release services for 500+ businesses. Get a free Music Release consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-tauranga",
    siteName: "TML Agency",
    type: "website",
    locale: "en_NZ",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Tauranga" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Music Release Agency in Tauranga",
    description: "Top-rated Music Release company in Tauranga. TML offers expert Music Release services for 500+ businesses. Get a free Music Release consultation today.",
    images: ["/og-image.png"],
  },
};

export default function MusicReleaseInTaurangaPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
