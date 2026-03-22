import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ipswich"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Ipswich | TML Agency",
  description: "TML offers expert ai influencer management services in Ipswich. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management ipswich", "ai influencer management agency ipswich", "ai influencer management company ipswich"],
};

export default function AiInfluencerManagementInIpswichPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
