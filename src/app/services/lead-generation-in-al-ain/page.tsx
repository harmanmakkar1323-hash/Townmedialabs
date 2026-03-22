import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["al_ain"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Al Ain | TML Agency",
  description: "TML offers expert lead generation services in Al Ain. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["lead generation al ain", "lead generation agency al ain", "lead generation company al ain"],
};

export default function LeadGenerationInAlAinPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
