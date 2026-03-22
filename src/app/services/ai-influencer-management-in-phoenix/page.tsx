import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["phoenix"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Phoenix | TML Agency",
  description: "TML offers expert ai influencer management services in Phoenix. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management phoenix", "ai influencer management agency phoenix", "ai influencer management company phoenix"],
};

export default function AiInfluencerManagementInPhoenixPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
