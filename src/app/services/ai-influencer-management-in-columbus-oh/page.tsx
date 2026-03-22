import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["columbus_oh"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Columbus | TML Agency",
  description: "TML offers expert ai influencer management services in Columbus. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management columbus", "ai influencer management agency columbus", "ai influencer management company columbus"],
};

export default function AiInfluencerManagementInColumbusOhPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
