import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["punjab"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Punjab | TML Agency",
  description: "TML offers expert ai influencer management services in Punjab. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management punjab", "ai influencer management agency punjab", "ai influencer management company punjab"],
};

export default function AiInfluencerManagementInPunjabPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
