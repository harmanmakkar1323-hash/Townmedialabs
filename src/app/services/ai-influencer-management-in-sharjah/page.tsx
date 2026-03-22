import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["sharjah"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Sharjah | TML Agency",
  description: "TML offers expert ai influencer management services in Sharjah. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management sharjah", "ai influencer management agency sharjah", "ai influencer management company sharjah"],
};

export default function AiInfluencerManagementInSharjahPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
