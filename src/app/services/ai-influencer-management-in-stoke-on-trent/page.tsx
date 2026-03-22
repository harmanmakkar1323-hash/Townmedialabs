import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["stoke_on_trent"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Stoke-on-Trent | TML Agency",
  description: "TML offers expert ai influencer management services in Stoke-on-Trent. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management stoke-on-trent", "ai influencer management agency stoke-on-trent", "ai influencer management company stoke-on-trent"],
};

export default function AiInfluencerManagementInStokeOnTrentPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
