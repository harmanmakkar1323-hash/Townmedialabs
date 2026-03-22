import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["fujairah"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Fujairah | TML Agency",
  description: "TML offers expert ai influencer management services in Fujairah. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management fujairah", "ai influencer management agency fujairah", "ai influencer management company fujairah"],
};

export default function AiInfluencerManagementInFujairahPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
