import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["south_delhi"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in South Delhi | TML Agency",
  description: "TML offers expert AI influencer management services in South Delhi. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["AI influencer management south delhi", "AI influencer management agency south delhi", "AI influencer management company south delhi"],
};

export default function AiinfluencermanagementInSouthDelhiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
