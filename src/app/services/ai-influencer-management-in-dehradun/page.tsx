import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["dehradun"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Dehradun | TML Agency",
  description: "TML offers expert AI influencer management services in Dehradun. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["AI influencer management dehradun", "AI influencer management agency dehradun", "AI influencer management company dehradun"],
};

export default function AiinfluencermanagementInDehradunPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
