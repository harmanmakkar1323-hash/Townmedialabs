import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ras_al_khaimah"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Ras Al Khaimah | TML Agency",
  description: "TML offers expert ai influencer management services in Ras Al Khaimah. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management ras al khaimah", "ai influencer management agency ras al khaimah", "ai influencer management company ras al khaimah"],
};

export default function AiInfluencerManagementInRasAlKhaimahPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
