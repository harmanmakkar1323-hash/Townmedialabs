import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["dundee"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Dundee | TML Agency",
  description: "TML offers expert ai influencer management services in Dundee. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management dundee", "ai influencer management agency dundee", "ai influencer management company dundee"],
};

export default function AiInfluencerManagementInDundeePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
