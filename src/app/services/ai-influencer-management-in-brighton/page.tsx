import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["brighton"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Brighton | TML Agency",
  description: "TML offers expert ai influencer management services in Brighton. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management brighton", "ai influencer management agency brighton", "ai influencer management company brighton"],
};

export default function AiInfluencerManagementInBrightonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
