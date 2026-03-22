import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["sheffield"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Sheffield | TML Agency",
  description: "TML offers expert ai influencer management services in Sheffield. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management sheffield", "ai influencer management agency sheffield", "ai influencer management company sheffield"],
};

export default function AiInfluencerManagementInSheffieldPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
