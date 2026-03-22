import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["leicester"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Leicester | TML Agency",
  description: "TML offers expert ai influencer management services in Leicester. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management leicester", "ai influencer management agency leicester", "ai influencer management company leicester"],
};

export default function AiInfluencerManagementInLeicesterPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
