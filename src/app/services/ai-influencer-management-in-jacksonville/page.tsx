import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["jacksonville"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Jacksonville | TML Agency",
  description: "TML offers expert ai influencer management services in Jacksonville. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management jacksonville", "ai influencer management agency jacksonville", "ai influencer management company jacksonville"],
};

export default function AiInfluencerManagementInJacksonvillePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
