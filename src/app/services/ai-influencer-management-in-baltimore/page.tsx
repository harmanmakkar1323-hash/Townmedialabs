import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["baltimore"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Baltimore | TML Agency",
  description: "TML offers expert ai influencer management services in Baltimore. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management baltimore", "ai influencer management agency baltimore", "ai influencer management company baltimore"],
};

export default function AiInfluencerManagementInBaltimorePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
