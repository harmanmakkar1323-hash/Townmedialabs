import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["gold_coast"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Gold Coast | TML Agency",
  description: "TML offers expert ai influencer management services in Gold Coast. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management gold coast", "ai influencer management agency gold coast", "ai influencer management company gold coast"],
};

export default function AiInfluencerManagementInGoldCoastPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
