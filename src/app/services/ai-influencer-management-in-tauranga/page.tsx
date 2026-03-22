import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["tauranga"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Tauranga | TML Agency",
  description: "TML offers expert ai influencer management services in Tauranga, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["ai influencer management tauranga", "ai influencer management agency tauranga", "ai influencer management tauranga nz"],
};

export default function AiInfluencerManagementInTaurangaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
