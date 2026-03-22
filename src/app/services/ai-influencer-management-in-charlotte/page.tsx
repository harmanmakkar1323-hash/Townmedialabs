import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["charlotte"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Charlotte | TML Agency",
  description: "TML offers expert ai influencer management services in Charlotte. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management charlotte", "ai influencer management agency charlotte", "ai influencer management company charlotte"],
};

export default function AiInfluencerManagementInCharlottePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
