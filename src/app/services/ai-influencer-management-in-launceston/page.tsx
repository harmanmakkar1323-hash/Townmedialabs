import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["launceston"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Launceston | TML Agency",
  description: "TML offers expert ai influencer management services in Launceston. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management launceston", "ai influencer management agency launceston", "ai influencer management company launceston"],
};

export default function AiInfluencerManagementInLauncestonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
