import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["chicago"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Chicago | TML Agency",
  description: "TML offers expert ai influencer management services in Chicago. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management chicago", "ai influencer management agency chicago", "ai influencer management company chicago"],
};

export default function AiInfluencerManagementInChicagoPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
