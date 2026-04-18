import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["kolkata"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Kolkata",
  description: "Top-rated Music Release company in Kolkata. TML offers expert Music Release services for 500+ businesses. Get a free Music Release consultation today.",
  keywords: ["music release and distribution kolkata", "music release and distribution agency kolkata", "music release and distribution company kolkata"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-kolkata",
  },
  openGraph: {
    title: "Best Music Release Agency in Kolkata",
    description: "Top-rated Music Release company in Kolkata. TML offers expert Music Release services for 500+ businesses. Get a free Music Release consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-kolkata",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Kolkata" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Music Release Agency in Kolkata",
    description: "Top-rated Music Release company in Kolkata. TML offers expert Music Release services for 500+ businesses. Get a free Music Release consultation today.",
    images: ["/og-image.png"],
  },
};

export default function MusicreleaseInKolkataPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
