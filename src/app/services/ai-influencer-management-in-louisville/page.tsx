import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["louisville"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Louisville | TML Agency",
  description: "TML offers expert ai influencer management services in Louisville. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management louisville", "ai influencer management agency louisville", "ai influencer management company louisville"],
};

export default function AiInfluencerManagementInLouisvillePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
