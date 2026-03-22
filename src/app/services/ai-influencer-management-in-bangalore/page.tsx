import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["bangalore"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Bangalore | TML Agency",
  description: "TML offers expert AI influencer management services in Bangalore. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["AI influencer management bangalore", "AI influencer management agency bangalore", "AI influencer management company bangalore"],
};

export default function AiinfluencermanagementInBangalorePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
