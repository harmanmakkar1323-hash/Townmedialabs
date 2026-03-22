import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["jalandhar"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Jalandhar | TML Agency",
  description: "TML offers expert AI influencer management services in Jalandhar. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["AI influencer management jalandhar", "AI influencer management agency jalandhar", "AI influencer management company jalandhar"],
};

export default function AiinfluencermanagementInJalandharPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
