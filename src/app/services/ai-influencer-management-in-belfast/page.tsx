import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["belfast"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Belfast | TML Agency",
  description: "TML offers expert ai influencer management services in Belfast. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management belfast", "ai influencer management agency belfast", "ai influencer management company belfast"],
};

export default function AiInfluencerManagementInBelfastPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
