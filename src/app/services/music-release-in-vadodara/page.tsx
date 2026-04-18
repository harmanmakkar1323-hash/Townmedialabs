import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["vadodara"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Vadodara",
  description: "Top-rated Music Release company in Vadodara. TML offers expert Music Release services for 500+ businesses. Get a free Music Release consultation today.",
  keywords: ["music release and distribution vadodara", "music release and distribution agency vadodara", "music release and distribution company vadodara"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-vadodara",
  },
  openGraph: {
    title: "Best Music Release Agency in Vadodara",
    description: "Top-rated Music Release company in Vadodara. TML offers expert Music Release services for 500+ businesses. Get a free Music Release consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-vadodara",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Vadodara" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Music Release Agency in Vadodara",
    description: "Top-rated Music Release company in Vadodara. TML offers expert Music Release services for 500+ businesses. Get a free Music Release consultation today.",
    images: ["/og-image.png"],
  },
};

export default function MusicreleaseInVadodaraPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
