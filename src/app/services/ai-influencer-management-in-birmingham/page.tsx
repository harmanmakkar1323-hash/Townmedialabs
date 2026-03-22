import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["birmingham"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Birmingham | TML Agency",
  description: "TML offers expert ai influencer management services in Birmingham. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management birmingham", "ai influencer management agency birmingham", "ai influencer management company birmingham"],
};

export default function AiInfluencerManagementInBirminghamPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
