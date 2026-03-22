import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["glasgow"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Glasgow | TML Agency",
  description: "TML offers expert ai influencer management services in Glasgow. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management glasgow", "ai influencer management agency glasgow", "ai influencer management company glasgow"],
};

export default function AiInfluencerManagementInGlasgowPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
