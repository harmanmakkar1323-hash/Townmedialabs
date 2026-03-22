import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["vadodara"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Vadodara | TML Agency",
  description: "TML offers expert lead generation services in Vadodara. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation vadodara", "lead generation agency vadodara", "lead generation company vadodara"],
};

export default function LeadgenerationInVadodaraPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
