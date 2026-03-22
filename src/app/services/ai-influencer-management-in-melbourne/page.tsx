import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["melbourne"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Melbourne | TML Agency",
  description: "TML offers expert ai influencer management services in Melbourne. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management melbourne", "ai influencer management agency melbourne", "ai influencer management company melbourne"],
};

export default function AiInfluencerManagementInMelbournePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
