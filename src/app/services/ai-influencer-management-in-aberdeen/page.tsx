import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["aberdeen"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Aberdeen | TML Agency",
  description: "TML offers expert ai influencer management services in Aberdeen. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management aberdeen", "ai influencer management agency aberdeen", "ai influencer management company aberdeen"],
};

export default function AiInfluencerManagementInAberdeenPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
