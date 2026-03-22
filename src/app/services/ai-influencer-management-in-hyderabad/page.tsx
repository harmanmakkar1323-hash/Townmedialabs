import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["hyderabad"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Hyderabad | TML Agency",
  description: "TML offers expert AI influencer management services in Hyderabad. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["AI influencer management hyderabad", "AI influencer management agency hyderabad", "AI influencer management company hyderabad"],
};

export default function AiinfluencermanagementInHyderabadPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
