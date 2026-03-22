import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["las_vegas"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Las Vegas | TML Agency",
  description: "TML offers expert ai influencer management services in Las Vegas. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management las vegas", "ai influencer management agency las vegas", "ai influencer management company las vegas"],
};

export default function AiInfluencerManagementInLasVegasPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
