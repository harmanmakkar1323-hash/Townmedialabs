import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["omaha"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Omaha | TML Agency",
  description: "TML offers expert ai influencer management services in Omaha. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management omaha", "ai influencer management agency omaha", "ai influencer management company omaha"],
};

export default function AiInfluencerManagementInOmahaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
