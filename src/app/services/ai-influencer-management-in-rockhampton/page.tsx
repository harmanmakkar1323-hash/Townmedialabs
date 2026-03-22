import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["rockhampton"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Rockhampton | TML Agency",
  description: "TML offers expert ai influencer management services in Rockhampton. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management rockhampton", "ai influencer management agency rockhampton", "ai influencer management company rockhampton"],
};

export default function AiInfluencerManagementInRockhamptonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
