import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["cambridge"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Cambridge | TML Agency",
  description: "TML offers expert ai influencer management services in Cambridge. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management cambridge", "ai influencer management agency cambridge", "ai influencer management company cambridge"],
};

export default function AiInfluencerManagementInCambridgePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
