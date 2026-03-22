import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["san_antonio"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in San Antonio | TML Agency",
  description: "TML offers expert ai influencer management services in San Antonio. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management san antonio", "ai influencer management agency san antonio", "ai influencer management company san antonio"],
};

export default function AiInfluencerManagementInSanAntonioPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
