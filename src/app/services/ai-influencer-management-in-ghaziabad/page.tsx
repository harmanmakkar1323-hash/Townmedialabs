import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ghaziabad"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Ghaziabad | TML Agency",
  description: "TML offers expert AI influencer management services in Ghaziabad. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["AI influencer management ghaziabad", "AI influencer management agency ghaziabad", "AI influencer management company ghaziabad"],
};

export default function AiinfluencermanagementInGhaziabadPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
