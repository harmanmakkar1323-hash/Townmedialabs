import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["karnal"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Karnal | TML Agency",
  description: "TML offers expert AI influencer management services in Karnal. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["AI influencer management karnal", "AI influencer management agency karnal", "AI influencer management company karnal"],
};

export default function AiinfluencermanagementInKarnalPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
