import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ajman"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Ajman | TML Agency",
  description: "TML offers expert ai influencer management services in Ajman. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management ajman", "ai influencer management agency ajman", "ai influencer management company ajman"],
};

export default function AiInfluencerManagementInAjmanPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
