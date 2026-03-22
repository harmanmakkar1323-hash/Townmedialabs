import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["patiala"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Patiala | TML Agency",
  description: "TML offers expert lead generation services in Patiala. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation patiala", "lead generation agency patiala", "lead generation company patiala"],
};

export default function LeadgenerationInPatialaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
