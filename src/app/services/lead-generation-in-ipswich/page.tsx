import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ipswich"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Ipswich | TML Agency",
  description: "TML offers expert lead generation services in Ipswich. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["lead generation ipswich", "lead generation agency ipswich", "lead generation company ipswich"],
};

export default function LeadGenerationInIpswichPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
