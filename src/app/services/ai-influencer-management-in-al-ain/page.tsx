import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["al_ain"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Al Ain | TML Agency",
  description: "TML offers expert ai influencer management services in Al Ain. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management al ain", "ai influencer management agency al ain", "ai influencer management company al ain"],
};

export default function AiInfluencerManagementInAlAinPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
