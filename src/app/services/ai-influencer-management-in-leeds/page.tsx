import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["leeds"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Leeds | TML Agency",
  description: "TML offers expert ai influencer management services in Leeds. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management leeds", "ai influencer management agency leeds", "ai influencer management company leeds"],
};

export default function AiInfluencerManagementInLeedsPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
