import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["new_york"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in New York | TML Agency",
  description: "TML offers expert ai influencer management services in New York. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management new york", "ai influencer management agency new york", "ai influencer management company new york"],
};

export default function AiInfluencerManagementInNewYorkPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
