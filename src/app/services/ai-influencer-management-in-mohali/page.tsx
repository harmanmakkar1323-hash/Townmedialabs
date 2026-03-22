import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["mohali"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Mohali | TML Agency",
  description: "TML offers expert AI influencer management services in Mohali. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["AI influencer management mohali", "AI influencer management agency mohali", "AI influencer management company mohali"],
};

export default function AiinfluencermanagementInMohaliPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
