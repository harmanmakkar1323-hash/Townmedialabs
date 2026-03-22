import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["jaipur"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Jaipur | TML Agency",
  description: "TML offers expert AI influencer management services in Jaipur. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["AI influencer management jaipur", "AI influencer management agency jaipur", "AI influencer management company jaipur"],
};

export default function AiinfluencermanagementInJaipurPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
