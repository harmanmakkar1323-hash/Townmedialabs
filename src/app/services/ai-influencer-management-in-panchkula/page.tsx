import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["panchkula"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Panchkula | TML Agency",
  description: "TML offers expert AI influencer management services in Panchkula. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["AI influencer management panchkula", "AI influencer management agency panchkula", "AI influencer management company panchkula"],
};

export default function AiinfluencermanagementInPanchkulaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
