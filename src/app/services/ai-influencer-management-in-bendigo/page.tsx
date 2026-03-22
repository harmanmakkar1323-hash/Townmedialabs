import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["bendigo"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Bendigo | TML Agency",
  description: "TML offers expert ai influencer management services in Bendigo. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management bendigo", "ai influencer management agency bendigo", "ai influencer management company bendigo"],
};

export default function AiInfluencerManagementInBendigoPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
