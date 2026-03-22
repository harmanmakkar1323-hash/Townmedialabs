import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["faridabad"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Faridabad | TML Agency",
  description: "TML offers expert lead generation services in Faridabad. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["lead generation faridabad", "lead generation agency faridabad", "lead generation company faridabad"],
};

export default function LeadgenerationInFaridabadPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
