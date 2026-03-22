import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["st_louis"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in St. Louis | TML Agency",
  description: "TML offers expert ai influencer management services in St. Louis. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management st. louis", "ai influencer management agency st. louis", "ai influencer management company st. louis"],
};

export default function AiInfluencerManagementInStLouisPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
