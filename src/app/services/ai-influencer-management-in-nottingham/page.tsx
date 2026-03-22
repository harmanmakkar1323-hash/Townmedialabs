import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["nottingham"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Nottingham | TML Agency",
  description: "TML offers expert ai influencer management services in Nottingham. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management nottingham", "ai influencer management agency nottingham", "ai influencer management company nottingham"],
};

export default function AiInfluencerManagementInNottinghamPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
