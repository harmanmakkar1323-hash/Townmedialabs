import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["manchester"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Manchester | TML Agency",
  description: "TML offers expert ai influencer management services in Manchester. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management manchester", "ai influencer management agency manchester", "ai influencer management company manchester"],
};

export default function AiInfluencerManagementInManchesterPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
