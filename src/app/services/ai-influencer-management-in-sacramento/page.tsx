import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["sacramento"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Sacramento | TML Agency",
  description: "TML offers expert ai influencer management services in Sacramento. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management sacramento", "ai influencer management agency sacramento", "ai influencer management company sacramento"],
};

export default function AiInfluencerManagementInSacramentoPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
