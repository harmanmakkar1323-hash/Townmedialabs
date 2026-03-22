import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["noida"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Noida | TML Agency",
  description: "TML offers expert AI influencer management services in Noida. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["AI influencer management noida", "AI influencer management agency noida", "AI influencer management company noida"],
};

export default function AiinfluencermanagementInNoidaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
