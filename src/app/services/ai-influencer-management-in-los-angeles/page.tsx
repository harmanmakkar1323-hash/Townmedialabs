import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["los_angeles"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Los Angeles | TML Agency",
  description: "TML offers expert ai influencer management services in Los Angeles. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management los angeles", "ai influencer management agency los angeles", "ai influencer management company los angeles"],
};

export default function AiInfluencerManagementInLosAngelesPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
