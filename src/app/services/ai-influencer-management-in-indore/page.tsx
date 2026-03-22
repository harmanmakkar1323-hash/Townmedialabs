import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["indore"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Indore | TML Agency",
  description: "TML offers expert AI influencer management services in Indore. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["AI influencer management indore", "AI influencer management agency indore", "AI influencer management company indore"],
};

export default function AiinfluencermanagementInIndorePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
