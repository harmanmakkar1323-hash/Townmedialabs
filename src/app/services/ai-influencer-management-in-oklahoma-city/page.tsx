import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["oklahoma_city"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Oklahoma City | TML Agency",
  description: "TML offers expert ai influencer management services in Oklahoma City. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management oklahoma city", "ai influencer management agency oklahoma city", "ai influencer management company oklahoma city"],
};

export default function AiInfluencerManagementInOklahomaCityPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
