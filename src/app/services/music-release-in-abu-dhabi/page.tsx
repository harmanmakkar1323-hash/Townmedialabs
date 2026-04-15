import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["abu_dhabi"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Abu Dhabi",
  description: "Top-rated Music Release company in Abu Dhabi. TML offers expert Music Release services for 500+ businesses. Get a free Music Release consultation today.",
  keywords: ["music release abu dhabi", "music release agency abu dhabi", "music release company abu dhabi"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-abu-dhabi",
  },
  openGraph: {
    title: "Best Music Release Agency in Abu Dhabi",
    description: "Top-rated Music Release company in Abu Dhabi. TML offers expert Music Release services for 500+ businesses. Get a free Music Release consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-abu-dhabi",
    siteName: "TML Agency",
    type: "website",
    locale: "en_AE",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Abu Dhabi" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Music Release Agency in Abu Dhabi",
    description: "Top-rated Music Release company in Abu Dhabi. TML offers expert Music Release services for 500+ businesses. Get a free Music Release consultation today.",
    images: ["/og-image.png"],
  },
};

export default function MusicReleaseInAbuDhabiPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
