import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["milton_keynes"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Milton Keynes",
  description: "Top-rated Music Release company in Milton Keynes. TML offers expert Music Release services for 500+ businesses. Get a free Music Release consultation today.",
  keywords: ["music release milton keynes", "music release agency milton keynes", "music release company milton keynes"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-milton-keynes",
  },
  openGraph: {
    title: "Best Music Release Agency in Milton Keynes",
    description: "Top-rated Music Release company in Milton Keynes. TML offers expert Music Release services for 500+ businesses. Get a free Music Release consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-milton-keynes",
    siteName: "TML Agency",
    type: "website",
    locale: "en_GB",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Milton Keynes" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Music Release Agency in Milton Keynes",
    description: "Top-rated Music Release company in Milton Keynes. TML offers expert Music Release services for 500+ businesses. Get a free Music Release consultation today.",
    images: ["/og-image.png"],
  },
};

export default function MusicReleaseInMiltonKeynesPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
