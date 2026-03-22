import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["hyderabad"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Hyderabad | TML Agency",
  description: "TML offers expert lead generation services in Hyderabad. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["lead generation hyderabad", "lead generation agency hyderabad", "lead generation company hyderabad"],
};

export default function LeadgenerationInHyderabadPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
