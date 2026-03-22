import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["wollongong"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Wollongong | TML Agency",
  description: "TML offers expert ai influencer management services in Wollongong. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management wollongong", "ai influencer management agency wollongong", "ai influencer management company wollongong"],
};

export default function AiInfluencerManagementInWollongongPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
