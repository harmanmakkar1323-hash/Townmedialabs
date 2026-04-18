import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["chandigarh"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Chandigarh",
  description: "Top-rated social media marketing company in Chandigarh. TML offers expert social media marketing services for 500+ businesses across Punjab. Get a free social media marketing consultation today.",
  keywords: ["best social media marketing agency chandigarh", "social media marketing company chandigarh", "social media marketing services chandigarh", "best social media marketing chandigarh", "top social media marketing agency chandigarh"],
  alternates: {
    canonical: "https://townmedialabs.com/services/social-media-marketing-in-chandigarh/",
  },
  openGraph: {
    title: "Best Social Media Marketing Agency in Chandigarh",
    description: "Top-rated social media marketing company in Chandigarh. TML offers expert social media marketing services for 500+ businesses across Punjab. Get a free social media marketing consultation today.",
    url: "https://townmedialabs.com/services/social-media-marketing-in-chandigarh/",
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Social Media Marketing Agency in Chandigarh" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Social Media Marketing Agency in Chandigarh",
    description: "Top-rated social media marketing company in Chandigarh. TML offers expert social media marketing services for 500+ businesses across Punjab. Get a free social media marketing consultation today.",
    images: ["/og-image.png"],
  },
};
export default function UsocialUmediaUmarketingUinUchandigarhPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
