import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["salt_lake_city"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Salt Lake City | TML Agency",
  description: "TML offers expert ai influencer management services in Salt Lake City. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management salt lake city", "ai influencer management agency salt lake city", "ai influencer management company salt lake city"],
};

export default function AiInfluencerManagementInSaltLakeCityPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
