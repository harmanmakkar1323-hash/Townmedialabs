import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["london"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in London | TML Agency",
  description: "TML offers expert ai influencer management services in London. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management london", "ai influencer management agency london", "ai influencer management company london"],
};

export default function AiInfluencerManagementInLondonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
