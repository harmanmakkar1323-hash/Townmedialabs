import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["gurgaon"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Gurgaon",
  description: "Top-rated Music Release company in Gurgaon. TML offers expert Music Release services for 500+ businesses. Get a free Music Release consultation today.",
  keywords: ["music release and distribution gurgaon", "music release and distribution agency gurgaon", "music release and distribution company gurgaon"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-gurgaon",
  },
  openGraph: {
    title: "Best Music Release Agency in Gurgaon",
    description: "Top-rated Music Release company in Gurgaon. TML offers expert Music Release services for 500+ businesses. Get a free Music Release consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-gurgaon",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Gurgaon" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Music Release Agency in Gurgaon",
    description: "Top-rated Music Release company in Gurgaon. TML offers expert Music Release services for 500+ businesses. Get a free Music Release consultation today.",
    images: ["/og-image.png"],
  },
};

export default function MusicreleaseInGurgaonPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
