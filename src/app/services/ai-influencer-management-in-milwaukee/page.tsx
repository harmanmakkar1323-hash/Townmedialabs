import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["milwaukee"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Milwaukee | TML Agency",
  description: "TML offers expert ai influencer management services in Milwaukee. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management milwaukee", "ai influencer management agency milwaukee", "ai influencer management company milwaukee"],
};

export default function AiInfluencerManagementInMilwaukeePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
