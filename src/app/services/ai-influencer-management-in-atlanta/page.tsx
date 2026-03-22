import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["atlanta"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Atlanta | TML Agency",
  description: "TML offers expert ai influencer management services in Atlanta. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management atlanta", "ai influencer management agency atlanta", "ai influencer management company atlanta"],
};

export default function AiInfluencerManagementInAtlantaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
