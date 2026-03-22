import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["memphis"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Memphis | TML Agency",
  description: "TML offers expert ai influencer management services in Memphis. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management memphis", "ai influencer management agency memphis", "ai influencer management company memphis"],
};

export default function AiInfluencerManagementInMemphisPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
