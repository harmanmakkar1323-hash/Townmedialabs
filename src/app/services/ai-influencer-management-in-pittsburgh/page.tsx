import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["pittsburgh"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Pittsburgh | TML Agency",
  description: "TML offers expert ai influencer management services in Pittsburgh. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management pittsburgh", "ai influencer management agency pittsburgh", "ai influencer management company pittsburgh"],
};

export default function AiInfluencerManagementInPittsburghPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
