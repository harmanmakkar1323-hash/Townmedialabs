import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["liverpool"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Liverpool | TML Agency",
  description: "TML offers expert ai influencer management services in Liverpool. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management liverpool", "ai influencer management agency liverpool", "ai influencer management company liverpool"],
};

export default function AiInfluencerManagementInLiverpoolPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
