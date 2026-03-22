import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["auckland"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Auckland | TML Agency",
  description: "TML offers expert ai influencer management services in Auckland. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management auckland", "ai influencer management agency auckland", "ai influencer management company auckland"],
};

export default function AiInfluencerManagementInAucklandPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
