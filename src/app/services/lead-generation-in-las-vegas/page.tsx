import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["las_vegas"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Las Vegas | TML Agency",
  description: "TML offers expert lead generation services in Las Vegas. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation las vegas", "lead generation agency las vegas", "lead generation company las vegas"],
};

export default function LeadGenerationInLasVegasPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
