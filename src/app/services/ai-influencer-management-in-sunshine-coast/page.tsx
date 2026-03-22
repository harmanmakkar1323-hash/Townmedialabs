import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["sunshine_coast"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Sunshine Coast | TML Agency",
  description: "TML offers expert ai influencer management services in Sunshine Coast. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management sunshine coast", "ai influencer management agency sunshine coast", "ai influencer management company sunshine coast"],
};

export default function AiInfluencerManagementInSunshineCoastPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
