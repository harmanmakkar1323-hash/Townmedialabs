import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["cardiff"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Cardiff | TML Agency",
  description: "TML offers expert ai influencer management services in Cardiff. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management cardiff", "ai influencer management agency cardiff", "ai influencer management company cardiff"],
};

export default function AiInfluencerManagementInCardiffPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
