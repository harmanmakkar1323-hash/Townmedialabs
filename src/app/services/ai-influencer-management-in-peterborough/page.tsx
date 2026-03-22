import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["peterborough"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Peterborough | TML Agency",
  description: "TML offers expert ai influencer management services in Peterborough. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management peterborough", "ai influencer management agency peterborough", "ai influencer management company peterborough"],
};

export default function AiInfluencerManagementInPeterboroughPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
