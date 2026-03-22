import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["bristol"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Bristol | TML Agency",
  description: "TML offers expert ai influencer management services in Bristol. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management bristol", "ai influencer management agency bristol", "ai influencer management company bristol"],
};

export default function AiInfluencerManagementInBristolPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
