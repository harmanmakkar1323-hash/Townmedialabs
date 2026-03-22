import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["calgary"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Calgary | TML Agency",
  description: "TML offers expert ai influencer management services in Calgary, Alberta. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management calgary", "ai influencer management agency calgary"],
};

export default function Page() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
