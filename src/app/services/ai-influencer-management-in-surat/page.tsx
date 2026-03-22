import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["surat"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Surat | TML Agency",
  description: "TML offers expert AI influencer management services in Surat. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["AI influencer management surat", "AI influencer management agency surat", "AI influencer management company surat"],
};

export default function AiinfluencermanagementInSuratPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
