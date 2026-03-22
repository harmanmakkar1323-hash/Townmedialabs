import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["newcastle"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Newcastle | TML Agency",
  description: "TML offers expert ai influencer management services in Newcastle. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management newcastle", "ai influencer management agency newcastle", "ai influencer management company newcastle"],
};

export default function AiInfluencerManagementInNewcastlePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
