import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["derabassi"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Derabassi | TML Agency",
  description: "TML offers expert AI influencer management services in Derabassi. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["AI influencer management derabassi", "AI influencer management agency derabassi", "AI influencer management company derabassi"],
};

export default function AiinfluencermanagementInDerabassiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
