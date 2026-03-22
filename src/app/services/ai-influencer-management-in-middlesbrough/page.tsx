import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["middlesbrough"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Middlesbrough | TML Agency",
  description: "TML offers expert ai influencer management services in Middlesbrough. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management middlesbrough", "ai influencer management agency middlesbrough", "ai influencer management company middlesbrough"],
};

export default function AiInfluencerManagementInMiddlesbroughPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
