import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["edmonton"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Edmonton | TML Agency",
  description: "TML offers expert ai influencer management services in Edmonton, Alberta. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management edmonton", "ai influencer management agency edmonton"],
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
