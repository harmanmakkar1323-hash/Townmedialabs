import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["mumbai"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Mumbai | TML Agency",
  description: "TML offers expert ai influencer management services in Mumbai. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management mumbai", "ai influencer management agency mumbai", "ai influencer management company mumbai"],
};

export default function AiInfluencerManagementInMumbaiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
