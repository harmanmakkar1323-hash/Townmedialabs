import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["southampton"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Southampton | TML Agency",
  description: "TML offers expert ai influencer management services in Southampton. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management southampton", "ai influencer management agency southampton", "ai influencer management company southampton"],
};

export default function AiInfluencerManagementInSouthamptonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
