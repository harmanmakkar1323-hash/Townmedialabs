import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["miami"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Miami | TML Agency",
  description: "TML offers expert ai influencer management services in Miami. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management miami", "ai influencer management agency miami", "ai influencer management company miami"],
};

export default function AiInfluencerManagementInMiamiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
