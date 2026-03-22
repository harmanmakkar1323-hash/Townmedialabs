import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["cincinnati"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Cincinnati | TML Agency",
  description: "TML offers expert ai influencer management services in Cincinnati. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management cincinnati", "ai influencer management agency cincinnati", "ai influencer management company cincinnati"],
};

export default function AiInfluencerManagementInCincinnatiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
