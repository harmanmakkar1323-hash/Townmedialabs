import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["york"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in York | TML Agency",
  description: "TML offers expert ai influencer management services in York. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management york", "ai influencer management agency york", "ai influencer management company york"],
};

export default function AiInfluencerManagementInYorkPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
