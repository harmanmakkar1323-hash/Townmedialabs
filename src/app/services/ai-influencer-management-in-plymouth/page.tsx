import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["plymouth"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Plymouth | TML Agency",
  description: "TML offers expert ai influencer management services in Plymouth. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management plymouth", "ai influencer management agency plymouth", "ai influencer management company plymouth"],
};

export default function AiInfluencerManagementInPlymouthPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
