import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["bathinda"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Bathinda | TML Agency",
  description: "TML offers expert ai influencer management services in Bathinda. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management bathinda", "ai influencer management agency bathinda", "ai influencer management company bathinda"],
};

export default function AiInfluencerManagementInBathindaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
