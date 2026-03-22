import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["denver"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Denver | TML Agency",
  description: "TML offers expert ai influencer management services in Denver. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management denver", "ai influencer management agency denver", "ai influencer management company denver"],
};

export default function AiInfluencerManagementInDenverPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
