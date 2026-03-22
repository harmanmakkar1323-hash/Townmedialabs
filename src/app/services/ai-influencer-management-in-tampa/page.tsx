import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["tampa"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Tampa | TML Agency",
  description: "TML offers expert ai influencer management services in Tampa. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management tampa", "ai influencer management agency tampa", "ai influencer management company tampa"],
};

export default function AiInfluencerManagementInTampaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
