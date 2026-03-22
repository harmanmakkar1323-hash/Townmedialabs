import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["edinburgh"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Edinburgh | TML Agency",
  description: "TML offers expert ai influencer management services in Edinburgh. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management edinburgh", "ai influencer management agency edinburgh", "ai influencer management company edinburgh"],
};

export default function AiInfluencerManagementInEdinburghPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
