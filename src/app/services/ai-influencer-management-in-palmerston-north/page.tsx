import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["palmerston_north"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Palmerston North | TML Agency",
  description: "TML offers expert ai influencer management services in Palmerston North, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["ai influencer management palmerston north", "ai influencer management agency palmerston north", "ai influencer management palmerston north nz"],
};

export default function AiInfluencerManagementInPalmerstonNorthPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
