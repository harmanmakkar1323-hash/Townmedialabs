import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["portland"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Portland | TML Agency",
  description: "TML offers expert ai influencer management services in Portland. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management portland", "ai influencer management agency portland", "ai influencer management company portland"],
};

export default function AiInfluencerManagementInPortlandPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
