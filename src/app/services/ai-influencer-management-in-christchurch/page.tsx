import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["christchurch"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Christchurch | TML Agency",
  description: "TML offers expert ai influencer management services in Christchurch, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["ai influencer management christchurch", "ai influencer management agency christchurch", "ai influencer management christchurch nz"],
};

export default function AiInfluencerManagementInChristchurchPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
