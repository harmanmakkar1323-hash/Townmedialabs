import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["chandigarh"];

export const metadata: Metadata = {
  title: "Best Music Release & Promotion Agency in Chandigarh",
  description: "Top-rated music release & promotion company in Chandigarh. TML offers expert music release & promotion services for 500+ businesses across Punjab. Get a free music release & promotion consultation today.",
  keywords: ["best music release & promotion agency chandigarh", "music release & promotion company chandigarh", "music release & promotion services chandigarh", "best music release & promotion chandigarh", "top music release & promotion agency chandigarh"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-chandigarh/",
  },
  openGraph: {
    title: "Best Music Release & Promotion Agency in Chandigarh",
    description: "Top-rated music release & promotion company in Chandigarh. TML offers expert music release & promotion services for 500+ businesses across Punjab. Get a free music release & promotion consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-chandigarh/",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release & Promotion Agency in Chandigarh" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Music Release & Promotion Agency in Chandigarh",
    description: "Top-rated music release & promotion company in Chandigarh. TML offers expert music release & promotion services for 500+ businesses across Punjab. Get a free music release & promotion consultation today.",
    images: ["/og-image.png"],
  },
};
export default function UmusicUreleaseUinUchandigarhPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release & Promotion"
    />
  );
}
