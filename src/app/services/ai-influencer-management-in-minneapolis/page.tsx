import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["minneapolis"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Minneapolis | TML Agency",
  description: "TML offers expert ai influencer management services in Minneapolis. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management minneapolis", "ai influencer management agency minneapolis", "ai influencer management company minneapolis"],
};

export default function AiInfluencerManagementInMinneapolisPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
