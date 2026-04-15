import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["fort_worth"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Fort Worth",
  description: "Top-rated Music Release company in Fort Worth. TML offers expert Music Release services for 500+ businesses. Get a free Music Release consultation today.",
  keywords: ["music release fort worth", "music release agency fort worth", "music release company fort worth"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-fort-worth",
  },
  openGraph: {
    title: "Best Music Release Agency in Fort Worth",
    description: "Top-rated Music Release company in Fort Worth. TML offers expert Music Release services for 500+ businesses. Get a free Music Release consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-fort-worth",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Fort Worth" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Music Release Agency in Fort Worth",
    description: "Top-rated Music Release company in Fort Worth. TML offers expert Music Release services for 500+ businesses. Get a free Music Release consultation today.",
    images: ["/og-image.png"],
  },
};

export default function MusicReleaseInFortWorthPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
