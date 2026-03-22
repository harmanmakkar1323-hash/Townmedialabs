import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["austin"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Austin | TML Agency",
  description: "TML offers expert ai influencer management services in Austin. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management austin", "ai influencer management agency austin", "ai influencer management company austin"],
};

export default function AiInfluencerManagementInAustinPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
