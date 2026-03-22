import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["houston"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Houston | TML Agency",
  description: "TML offers expert ai influencer management services in Houston. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management houston", "ai influencer management agency houston", "ai influencer management company houston"],
};

export default function AiInfluencerManagementInHoustonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
