import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["orlando"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Orlando | TML Agency",
  description: "TML offers expert lead generation services in Orlando. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation orlando", "lead generation agency orlando", "lead generation company orlando"],
};

export default function LeadGenerationInOrlandoPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
