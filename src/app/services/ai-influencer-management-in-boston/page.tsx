import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["boston"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Boston | TML Agency",
  description: "TML offers expert ai influencer management services in Boston. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management boston", "ai influencer management agency boston", "ai influencer management company boston"],
};

export default function AiInfluencerManagementInBostonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
