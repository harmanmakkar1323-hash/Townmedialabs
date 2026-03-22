import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["zirakpur"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Zirakpur | TML Agency",
  description: "TML offers expert ai influencer management services in Zirakpur. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management zirakpur", "ai influencer management agency zirakpur", "ai influencer management company zirakpur"],
};

export default function AiInfluencerManagementInZirakpurPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
