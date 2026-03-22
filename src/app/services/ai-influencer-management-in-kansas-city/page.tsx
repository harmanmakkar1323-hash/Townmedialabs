import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["kansas_city"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Kansas City | TML Agency",
  description: "TML offers expert ai influencer management services in Kansas City. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management kansas city", "ai influencer management agency kansas city", "ai influencer management company kansas city"],
};

export default function AiInfluencerManagementInKansasCityPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
