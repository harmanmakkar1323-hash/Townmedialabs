import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["dubai"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Dubai | TML Agency",
  description: "TML offers expert ai influencer management services in Dubai. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management dubai", "ai influencer management agency dubai", "ai influencer management company dubai"],
};

export default function AiInfluencerManagementInDubaiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
