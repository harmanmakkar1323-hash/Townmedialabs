import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["nagpur"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Nagpur | TML Agency",
  description: "TML offers expert AI influencer management services in Nagpur. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["AI influencer management nagpur", "AI influencer management agency nagpur", "AI influencer management company nagpur"],
};

export default function AiinfluencermanagementInNagpurPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
