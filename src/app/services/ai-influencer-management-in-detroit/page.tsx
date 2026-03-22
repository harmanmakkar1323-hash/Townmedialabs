import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["detroit"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Detroit | TML Agency",
  description: "TML offers expert ai influencer management services in Detroit. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management detroit", "ai influencer management agency detroit", "ai influencer management company detroit"],
};

export default function AiInfluencerManagementInDetroitPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
