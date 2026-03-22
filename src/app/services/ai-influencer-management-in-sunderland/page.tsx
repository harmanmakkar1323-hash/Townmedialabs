import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["sunderland"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Sunderland | TML Agency",
  description: "TML offers expert ai influencer management services in Sunderland. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management sunderland", "ai influencer management agency sunderland", "ai influencer management company sunderland"],
};

export default function AiInfluencerManagementInSunderlandPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
