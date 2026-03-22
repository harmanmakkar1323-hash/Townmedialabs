import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["cleveland"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Cleveland | TML Agency",
  description: "TML offers expert ai influencer management services in Cleveland. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management cleveland", "ai influencer management agency cleveland", "ai influencer management company cleveland"],
};

export default function AiInfluencerManagementInClevelandPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
