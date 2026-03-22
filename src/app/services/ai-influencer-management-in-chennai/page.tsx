import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["chennai"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Chennai | TML Agency",
  description: "TML offers expert AI influencer management services in Chennai. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["AI influencer management chennai", "AI influencer management agency chennai", "AI influencer management company chennai"],
};

export default function AiinfluencermanagementInChennaiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
