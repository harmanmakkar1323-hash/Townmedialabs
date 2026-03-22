import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["gold_coast"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Gold Coast | TML Agency",
  description: "TML offers expert social media marketing services in Gold Coast. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing gold coast", "social media marketing agency gold coast", "social media marketing company gold coast"],
};

export default function SocialMediaInGoldCoastPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
