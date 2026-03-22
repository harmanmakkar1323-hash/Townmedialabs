import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["philadelphia"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Philadelphia | TML Agency",
  description: "TML offers expert lead generation services in Philadelphia. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["lead generation philadelphia", "lead generation agency philadelphia", "lead generation company philadelphia"],
};

export default function LeadGenerationInPhiladelphiaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
