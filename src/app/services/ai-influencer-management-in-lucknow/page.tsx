import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["lucknow"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Lucknow | TML Agency",
  description: "TML offers expert AI influencer management services in Lucknow. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["AI influencer management lucknow", "AI influencer management agency lucknow", "AI influencer management company lucknow"],
};

export default function AiinfluencermanagementInLucknowPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
