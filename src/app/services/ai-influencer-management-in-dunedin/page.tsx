import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["dunedin"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Dunedin | TML Agency",
  description: "TML offers expert ai influencer management services in Dunedin, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["ai influencer management dunedin", "ai influencer management agency dunedin", "ai influencer management dunedin nz"],
};

export default function AiInfluencerManagementInDunedinPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
