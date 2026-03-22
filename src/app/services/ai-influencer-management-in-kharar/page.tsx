import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["kharar"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Kharar | TML Agency",
  description: "TML offers expert AI influencer management services in Kharar. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["AI influencer management kharar", "AI influencer management agency kharar", "AI influencer management company kharar"],
};

export default function AiinfluencermanagementInKhararPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
