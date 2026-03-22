import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["gurgaon"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Gurgaon | TML Agency",
  description: "TML offers expert AI influencer management services in Gurgaon. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["AI influencer management gurgaon", "AI influencer management agency gurgaon", "AI influencer management company gurgaon"],
};

export default function AiinfluencermanagementInGurgaonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
