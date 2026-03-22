import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["dallas"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Dallas | TML Agency",
  description: "TML offers expert ai influencer management services in Dallas. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management dallas", "ai influencer management agency dallas", "ai influencer management company dallas"],
};

export default function AiInfluencerManagementInDallasPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
