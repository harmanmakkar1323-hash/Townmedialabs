import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["panchkula"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Panchkula",
  description: "Top-rated Music Release company in Panchkula. TML offers expert Music Release services for 500+ businesses. Get a free Music Release consultation today.",
  keywords: ["music release and distribution panchkula", "music release and distribution agency panchkula", "music release and distribution company panchkula"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-panchkula",
  },
  openGraph: {
    title: "Best Music Release Agency in Panchkula",
    description: "Top-rated Music Release company in Panchkula. TML offers expert Music Release services for 500+ businesses. Get a free Music Release consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-panchkula",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Panchkula" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Music Release Agency in Panchkula",
    description: "Top-rated Music Release company in Panchkula. TML offers expert Music Release services for 500+ businesses. Get a free Music Release consultation today.",
    images: ["/og-image.png"],
  },
};

export default function MusicreleaseInPanchkulaPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
