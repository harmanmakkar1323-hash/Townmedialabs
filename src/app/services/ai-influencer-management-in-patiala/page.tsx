import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["patiala"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Patiala | TML Agency",
  description: "TML offers expert AI influencer management services in Patiala. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["AI influencer management patiala", "AI influencer management agency patiala", "AI influencer management company patiala"],
};

export default function AiinfluencermanagementInPatialaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
