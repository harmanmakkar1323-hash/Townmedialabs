import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["york"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in York | TML Agency",
  description: "TML offers expert lead generation services in York. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["lead generation york", "lead generation agency york", "lead generation company york"],
};

export default function LeadGenerationInYorkPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
