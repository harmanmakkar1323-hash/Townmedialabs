import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["wolverhampton"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Wolverhampton | TML Agency",
  description: "TML offers expert ai influencer management services in Wolverhampton. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management wolverhampton", "ai influencer management agency wolverhampton", "ai influencer management company wolverhampton"],
};

export default function AiInfluencerManagementInWolverhamptonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
