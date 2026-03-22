import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["virginia_beach"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Virginia Beach | TML Agency",
  description: "TML offers expert ai influencer management services in Virginia Beach. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management virginia beach", "ai influencer management agency virginia beach", "ai influencer management company virginia beach"],
};

export default function AiInfluencerManagementInVirginiaBeachPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
