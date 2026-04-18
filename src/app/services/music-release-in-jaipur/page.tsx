import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["jaipur"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Jaipur",
  description: "Top-rated Music Release company in Jaipur. TML offers expert Music Release services for 500+ businesses. Get a free Music Release consultation today.",
  keywords: ["music release and distribution jaipur", "music release and distribution agency jaipur", "music release and distribution company jaipur"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-jaipur",
  },
  openGraph: {
    title: "Best Music Release Agency in Jaipur",
    description: "Top-rated Music Release company in Jaipur. TML offers expert Music Release services for 500+ businesses. Get a free Music Release consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-jaipur",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Jaipur" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Music Release Agency in Jaipur",
    description: "Top-rated Music Release company in Jaipur. TML offers expert Music Release services for 500+ businesses. Get a free Music Release consultation today.",
    images: ["/og-image.png"],
  },
};

export default function MusicreleaseInJaipurPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
