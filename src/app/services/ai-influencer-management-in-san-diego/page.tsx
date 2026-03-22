import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["san_diego"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in San Diego | TML Agency",
  description: "TML offers expert ai influencer management services in San Diego. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management san diego", "ai influencer management agency san diego", "ai influencer management company san diego"],
};

export default function AiInfluencerManagementInSanDiegoPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
