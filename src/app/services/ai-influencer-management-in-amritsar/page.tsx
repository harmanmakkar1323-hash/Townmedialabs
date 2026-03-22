import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["amritsar"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Amritsar | TML Agency",
  description: "TML offers expert AI influencer management services in Amritsar. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["AI influencer management amritsar", "AI influencer management agency amritsar", "AI influencer management company amritsar"],
};

export default function AiinfluencermanagementInAmritsarPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
