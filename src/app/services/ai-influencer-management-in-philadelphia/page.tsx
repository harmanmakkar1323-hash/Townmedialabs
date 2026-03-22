import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["philadelphia"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Philadelphia | TML Agency",
  description: "TML offers expert ai influencer management services in Philadelphia. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management philadelphia", "ai influencer management agency philadelphia", "ai influencer management company philadelphia"],
};

export default function AiInfluencerManagementInPhiladelphiaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
