import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["swansea"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Swansea | TML Agency",
  description: "TML offers expert ai influencer management services in Swansea. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management swansea", "ai influencer management agency swansea", "ai influencer management company swansea"],
};

export default function AiInfluencerManagementInSwanseaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
