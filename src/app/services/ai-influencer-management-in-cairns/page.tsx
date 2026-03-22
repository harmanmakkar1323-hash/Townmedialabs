import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["cairns"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Cairns | TML Agency",
  description: "TML offers expert ai influencer management services in Cairns. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management cairns", "ai influencer management agency cairns", "ai influencer management company cairns"],
};

export default function AiInfluencerManagementInCairnsPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
