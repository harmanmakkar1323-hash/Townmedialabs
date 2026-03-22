import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["luton_uk"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Luton | TML Agency",
  description: "TML offers expert ai influencer management services in Luton. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management luton", "ai influencer management agency luton", "ai influencer management company luton"],
};

export default function AiInfluencerManagementInLutonUkPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
