import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["sydney"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Sydney | TML Agency",
  description: "TML offers expert ai influencer management services in Sydney. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management sydney", "ai influencer management agency sydney", "ai influencer management company sydney"],
};

export default function AiInfluencerManagementInSydneyPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
