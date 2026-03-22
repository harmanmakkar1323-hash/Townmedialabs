import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["exeter"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Exeter | TML Agency",
  description: "TML offers expert ai influencer management services in Exeter. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management exeter", "ai influencer management agency exeter", "ai influencer management company exeter"],
};

export default function AiInfluencerManagementInExeterPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
