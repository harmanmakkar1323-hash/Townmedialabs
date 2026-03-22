import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["richmond"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Richmond | TML Agency",
  description: "TML offers expert ai influencer management services in Richmond. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management richmond", "ai influencer management agency richmond", "ai influencer management company richmond"],
};

export default function AiInfluencerManagementInRichmondPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
