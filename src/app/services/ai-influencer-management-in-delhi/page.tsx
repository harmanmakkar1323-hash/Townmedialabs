import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["delhi"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Delhi | TML Agency",
  description: "TML offers expert ai influencer management services in Delhi. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management delhi", "ai influencer management agency delhi", "ai influencer management company delhi"],
};

export default function AiInfluencerManagementInDelhiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
