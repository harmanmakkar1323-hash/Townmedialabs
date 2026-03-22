import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["bhopal"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Bhopal | TML Agency",
  description: "TML offers expert AI influencer management services in Bhopal. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["AI influencer management bhopal", "AI influencer management agency bhopal", "AI influencer management company bhopal"],
};

export default function AiinfluencermanagementInBhopalPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
