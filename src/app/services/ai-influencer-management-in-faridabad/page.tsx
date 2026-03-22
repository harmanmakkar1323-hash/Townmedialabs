import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["faridabad"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Faridabad | TML Agency",
  description: "TML offers expert AI influencer management services in Faridabad. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["AI influencer management faridabad", "AI influencer management agency faridabad", "AI influencer management company faridabad"],
};

export default function AiinfluencermanagementInFaridabadPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
