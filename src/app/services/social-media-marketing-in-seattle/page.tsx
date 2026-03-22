import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["seattle"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Seattle | TML Agency",
  description: "TML offers expert social media marketing services in Seattle. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing seattle", "social media marketing agency seattle", "social media marketing company seattle"],
};

export default function SocialMediaInSeattlePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
