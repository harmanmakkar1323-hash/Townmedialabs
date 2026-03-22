import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["brisbane"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Brisbane | TML Agency",
  description: "TML offers expert ai influencer management services in Brisbane. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management brisbane", "ai influencer management agency brisbane", "ai influencer management company brisbane"],
};

export default function AiInfluencerManagementInBrisbanePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
