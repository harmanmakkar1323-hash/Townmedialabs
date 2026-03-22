import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["hamilton"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Hamilton | TML Agency",
  description: "TML offers expert ai influencer management services in Hamilton, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["ai influencer management hamilton", "ai influencer management agency hamilton", "ai influencer management hamilton nz"],
};

export default function AiInfluencerManagementInHamiltonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
