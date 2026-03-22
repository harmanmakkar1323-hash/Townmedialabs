import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["napier"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Napier | TML Agency",
  description: "TML offers expert ai influencer management services in Napier, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["ai influencer management napier", "ai influencer management agency napier", "ai influencer management napier nz"],
};

export default function AiInfluencerManagementInNapierPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
