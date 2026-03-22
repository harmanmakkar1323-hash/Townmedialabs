import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["queenstown"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Queenstown | TML Agency",
  description: "TML offers expert ai influencer management services in Queenstown, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["ai influencer management queenstown", "ai influencer management agency queenstown", "ai influencer management queenstown nz"],
};

export default function AiInfluencerManagementInQueenstownPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
