import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ahmedabad"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Ahmedabad | TML Agency",
  description: "TML offers expert AI influencer management services in Ahmedabad. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["AI influencer management ahmedabad", "AI influencer management agency ahmedabad", "AI influencer management company ahmedabad"],
};

export default function AiinfluencermanagementInAhmedabadPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
