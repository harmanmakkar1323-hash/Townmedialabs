import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["umm_al_quwain"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Umm Al Quwain",
  description: "Top-rated Music Release company in Umm Al Quwain. TML offers expert Music Release services for 500+ businesses. Get a free Music Release consultation today.",
  keywords: ["music release umm al quwain", "music release agency umm al quwain", "music release company umm al quwain"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-umm-al-quwain",
  },
  openGraph: {
    title: "Best Music Release Agency in Umm Al Quwain",
    description: "Top-rated Music Release company in Umm Al Quwain. TML offers expert Music Release services for 500+ businesses. Get a free Music Release consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-umm-al-quwain",
    siteName: "TML Agency",
    type: "website",
    locale: "en_AE",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Umm Al Quwain" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Music Release Agency in Umm Al Quwain",
    description: "Top-rated Music Release company in Umm Al Quwain. TML offers expert Music Release services for 500+ businesses. Get a free Music Release consultation today.",
    images: ["/og-image.png"],
  },
};

export default function MusicReleaseInUmmAlQuwainPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
