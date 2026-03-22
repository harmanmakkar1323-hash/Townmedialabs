import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["raleigh"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Raleigh | TML Agency",
  description: "TML offers expert ai influencer management services in Raleigh. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management raleigh", "ai influencer management agency raleigh", "ai influencer management company raleigh"],
};

export default function AiInfluencerManagementInRaleighPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
