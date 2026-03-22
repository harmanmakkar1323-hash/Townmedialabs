import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["kolkata"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Kolkata | TML Agency",
  description: "TML offers expert AI influencer management services in Kolkata. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["AI influencer management kolkata", "AI influencer management agency kolkata", "AI influencer management company kolkata"],
};

export default function AiinfluencermanagementInKolkataPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
