import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["honolulu"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Honolulu | TML Agency",
  description: "TML offers expert ai influencer management services in Honolulu. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management honolulu", "ai influencer management agency honolulu", "ai influencer management company honolulu"],
};

export default function AiInfluencerManagementInHonoluluPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
