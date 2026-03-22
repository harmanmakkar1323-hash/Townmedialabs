import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["coventry"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Coventry | TML Agency",
  description: "TML offers expert ai influencer management services in Coventry. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management coventry", "ai influencer management agency coventry", "ai influencer management company coventry"],
};

export default function AiInfluencerManagementInCoventryPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
