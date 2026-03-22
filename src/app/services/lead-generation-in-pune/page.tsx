import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["pune"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Pune | TML Agency",
  description: "TML offers expert lead generation services in Pune. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["lead generation pune", "lead generation agency pune", "lead generation company pune"],
};

export default function LeadgenerationInPunePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
