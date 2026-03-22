import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["coimbatore"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Coimbatore | TML Agency",
  description: "TML offers expert AI influencer management services in Coimbatore. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["AI influencer management coimbatore", "AI influencer management agency coimbatore", "AI influencer management company coimbatore"],
};

export default function AiinfluencermanagementInCoimbatorePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
