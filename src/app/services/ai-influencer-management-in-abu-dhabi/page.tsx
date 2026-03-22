import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["abu_dhabi"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Abu Dhabi | TML Agency",
  description: "TML offers expert ai influencer management services in Abu Dhabi. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management abu dhabi", "ai influencer management agency abu dhabi", "ai influencer management company abu dhabi"],
};

export default function AiInfluencerManagementInAbuDhabiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
