import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["rajkot"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Rajkot | TML Agency",
  description: "TML offers expert AI influencer management services in Rajkot. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["AI influencer management rajkot", "AI influencer management agency rajkot", "AI influencer management company rajkot"],
};

export default function AiinfluencermanagementInRajkotPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
