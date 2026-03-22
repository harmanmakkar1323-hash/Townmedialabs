import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["wellington"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Wellington | TML Agency",
  description: "TML offers expert ai influencer management services in Wellington, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["ai influencer management wellington", "ai influencer management agency wellington", "ai influencer management wellington nz"],
};

export default function AiInfluencerManagementInWellingtonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
