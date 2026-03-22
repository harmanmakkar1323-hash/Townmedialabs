import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["toowoomba"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Toowoomba | TML Agency",
  description: "TML offers expert ai influencer management services in Toowoomba. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management toowoomba", "ai influencer management agency toowoomba", "ai influencer management company toowoomba"],
};

export default function AiInfluencerManagementInToowoombaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
