import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["ras_al_khaimah"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Ras Al Khaimah",
  description: "Top-rated Music Release company in Ras Al Khaimah. TML offers expert Music Release services for 500+ businesses. Get a free Music Release consultation today.",
  keywords: ["music release ras al khaimah", "music release agency ras al khaimah", "music release company ras al khaimah"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-ras-al-khaimah",
  },
  openGraph: {
    title: "Best Music Release Agency in Ras Al Khaimah",
    description: "Top-rated Music Release company in Ras Al Khaimah. TML offers expert Music Release services for 500+ businesses. Get a free Music Release consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-ras-al-khaimah",
    siteName: "TML Agency",
    type: "website",
    locale: "en_AE",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Ras Al Khaimah" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Music Release Agency in Ras Al Khaimah",
    description: "Top-rated Music Release company in Ras Al Khaimah. TML offers expert Music Release services for 500+ businesses. Get a free Music Release consultation today.",
    images: ["/og-image.png"],
  },
};

export default function MusicReleaseInRasAlKhaimahPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
