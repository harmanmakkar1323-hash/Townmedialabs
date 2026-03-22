import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["hobart"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Hobart | TML Agency",
  description: "TML offers expert ai influencer management services in Hobart. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management hobart", "ai influencer management agency hobart", "ai influencer management company hobart"],
};

export default function AiInfluencerManagementInHobartPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
