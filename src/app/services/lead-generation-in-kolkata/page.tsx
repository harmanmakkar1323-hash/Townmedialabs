import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["kolkata"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Kolkata | TML Agency",
  description: "TML offers expert lead generation services in Kolkata. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["lead generation kolkata", "lead generation agency kolkata", "lead generation company kolkata"],
};

export default function LeadgenerationInKolkataPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
