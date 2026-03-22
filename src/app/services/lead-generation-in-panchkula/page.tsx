import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["panchkula"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Panchkula | TML Agency",
  description: "TML offers expert lead generation services in Panchkula. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation panchkula", "lead generation agency panchkula", "lead generation company panchkula"],
};

export default function LeadgenerationInPanchkulaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
