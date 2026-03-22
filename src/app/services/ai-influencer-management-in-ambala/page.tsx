import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ambala"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Ambala | TML Agency",
  description: "TML offers expert AI influencer management services in Ambala. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["AI influencer management ambala", "AI influencer management agency ambala", "AI influencer management company ambala"],
};

export default function AiinfluencermanagementInAmbalaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
