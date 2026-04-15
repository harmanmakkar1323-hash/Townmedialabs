import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["ahmedabad"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Ahmedabad",
  description: "Top-rated Social Media Marketing company in Ahmedabad. TML offers expert Social Media Marketing services for 500+ businesses. Get a free Social Media Marketing consultation today.",
  keywords: ["social media marketing ahmedabad", "social media marketing agency ahmedabad", "social media marketing company ahmedabad"],
  alternates: {
    canonical: "https://townmedialabs.com/services/social-media-marketing-in-ahmedabad",
  },
  openGraph: {
    title: "Best Social Media Marketing Agency in Ahmedabad",
    description: "Top-rated Social Media Marketing company in Ahmedabad. TML offers expert Social Media Marketing services for 500+ businesses. Get a free Social Media Marketing consultation today.",
    url: "https://townmedialabs.com/services/social-media-marketing-in-ahmedabad",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Social Media Marketing Agency in Ahmedabad" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Social Media Marketing Agency in Ahmedabad",
    description: "Top-rated Social Media Marketing company in Ahmedabad. TML offers expert Social Media Marketing services for 500+ businesses. Get a free Social Media Marketing consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SocialmediaInAhmedabadPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
