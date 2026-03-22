import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["adelaide"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Adelaide | TML Agency",
  description: "TML offers expert ai influencer management services in Adelaide. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management adelaide", "ai influencer management agency adelaide", "ai influencer management company adelaide"],
};

export default function AiInfluencerManagementInAdelaidePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
