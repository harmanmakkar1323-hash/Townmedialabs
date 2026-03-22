import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["oxford"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Oxford | TML Agency",
  description: "TML offers expert ai influencer management services in Oxford. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management oxford", "ai influencer management agency oxford", "ai influencer management company oxford"],
};

export default function AiInfluencerManagementInOxfordPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
