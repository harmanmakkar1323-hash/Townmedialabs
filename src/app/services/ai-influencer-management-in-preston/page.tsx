import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["preston"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Preston | TML Agency",
  description: "TML offers expert ai influencer management services in Preston. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management preston", "ai influencer management agency preston", "ai influencer management company preston"],
};

export default function AiInfluencerManagementInPrestonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
