import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["bournemouth"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Bournemouth | TML Agency",
  description: "TML offers expert ai influencer management services in Bournemouth. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management bournemouth", "ai influencer management agency bournemouth", "ai influencer management company bournemouth"],
};

export default function AiInfluencerManagementInBournemouthPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
