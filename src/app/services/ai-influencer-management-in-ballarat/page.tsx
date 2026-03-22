import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ballarat"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Ballarat | TML Agency",
  description: "TML offers expert ai influencer management services in Ballarat. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management ballarat", "ai influencer management agency ballarat", "ai influencer management company ballarat"],
};

export default function AiInfluencerManagementInBallaratPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
