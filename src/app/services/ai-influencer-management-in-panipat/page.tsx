import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["panipat"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Panipat | TML Agency",
  description: "TML offers expert AI influencer management services in Panipat. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["AI influencer management panipat", "AI influencer management agency panipat", "AI influencer management company panipat"],
};

export default function AiinfluencermanagementInPanipatPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
