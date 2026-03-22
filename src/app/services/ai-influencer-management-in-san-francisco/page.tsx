import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["san_francisco"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in San Francisco | TML Agency",
  description: "TML offers expert ai influencer management services in San Francisco. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management san francisco", "ai influencer management agency san francisco", "ai influencer management company san francisco"],
};

export default function AiInfluencerManagementInSanFranciscoPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
