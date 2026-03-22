import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["townsville"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Townsville | TML Agency",
  description: "TML offers expert lead generation services in Townsville. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["lead generation townsville", "lead generation agency townsville", "lead generation company townsville"],
};

export default function LeadGenerationInTownsvillePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
