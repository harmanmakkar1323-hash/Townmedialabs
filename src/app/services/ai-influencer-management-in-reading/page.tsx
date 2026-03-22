import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["reading"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Reading | TML Agency",
  description: "TML offers expert ai influencer management services in Reading. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management reading", "ai influencer management agency reading", "ai influencer management company reading"],
};

export default function AiInfluencerManagementInReadingPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
