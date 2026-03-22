import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["cheltenham"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Cheltenham | TML Agency",
  description: "TML offers expert ai influencer management services in Cheltenham. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management cheltenham", "ai influencer management agency cheltenham", "ai influencer management company cheltenham"],
};

export default function AiInfluencerManagementInCheltenhamPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
