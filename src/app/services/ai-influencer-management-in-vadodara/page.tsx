import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["vadodara"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Vadodara | TML Agency",
  description: "TML offers expert AI influencer management services in Vadodara. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["AI influencer management vadodara", "AI influencer management agency vadodara", "AI influencer management company vadodara"],
};

export default function AiinfluencermanagementInVadodaraPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
