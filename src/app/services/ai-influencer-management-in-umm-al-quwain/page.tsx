import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["umm_al_quwain"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Umm Al Quwain | TML Agency",
  description: "TML offers expert ai influencer management services in Umm Al Quwain. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management umm al quwain", "ai influencer management agency umm al quwain", "ai influencer management company umm al quwain"],
};

export default function AiInfluencerManagementInUmmAlQuwainPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
