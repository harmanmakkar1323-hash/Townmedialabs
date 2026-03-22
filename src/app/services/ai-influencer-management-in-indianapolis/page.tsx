import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["indianapolis"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Indianapolis | TML Agency",
  description: "TML offers expert ai influencer management services in Indianapolis. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management indianapolis", "ai influencer management agency indianapolis", "ai influencer management company indianapolis"],
};

export default function AiInfluencerManagementInIndianapolisPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
