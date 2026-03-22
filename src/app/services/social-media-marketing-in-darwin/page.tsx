import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["darwin"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Darwin | TML Agency",
  description: "TML offers expert social media marketing services in Darwin. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing darwin", "social media marketing agency darwin", "social media marketing company darwin"],
};

export default function SocialMediaInDarwinPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
