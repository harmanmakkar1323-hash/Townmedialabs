import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["seattle"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Seattle | TML Agency",
  description: "TML offers expert ai influencer management services in Seattle. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management seattle", "ai influencer management agency seattle", "ai influencer management company seattle"],
};

export default function AiInfluencerManagementInSeattlePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
