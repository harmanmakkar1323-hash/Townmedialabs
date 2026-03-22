import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["boise"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Boise | TML Agency",
  description: "TML offers expert ai influencer management services in Boise. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management boise", "ai influencer management agency boise", "ai influencer management company boise"],
};

export default function AiInfluencerManagementInBoisePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
