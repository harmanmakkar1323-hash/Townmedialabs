import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["visakhapatnam"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Visakhapatnam | TML Agency",
  description: "TML offers expert AI influencer management services in Visakhapatnam. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["AI influencer management visakhapatnam", "AI influencer management agency visakhapatnam", "AI influencer management company visakhapatnam"],
};

export default function AiinfluencermanagementInVisakhapatnamPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
