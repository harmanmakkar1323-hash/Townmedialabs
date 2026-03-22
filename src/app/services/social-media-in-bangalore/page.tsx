import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["bangalore"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Bangalore | TML Agency",
  description: "TML offers expert social media marketing services in Bangalore. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing bangalore", "social media marketing agency bangalore", "social media marketing company bangalore"],
};

export default function SocialmediaInBangalorePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
