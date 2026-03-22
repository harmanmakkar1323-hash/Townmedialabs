import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["townsville"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Townsville | TML Agency",
  description: "TML offers expert ai influencer management services in Townsville. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management townsville", "ai influencer management agency townsville", "ai influencer management company townsville"],
};

export default function AiInfluencerManagementInTownsvillePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
