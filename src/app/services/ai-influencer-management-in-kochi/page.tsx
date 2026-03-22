import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["kochi"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Kochi | TML Agency",
  description: "TML offers expert AI influencer management services in Kochi. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["AI influencer management kochi", "AI influencer management agency kochi", "AI influencer management company kochi"],
};

export default function AiinfluencermanagementInKochiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
