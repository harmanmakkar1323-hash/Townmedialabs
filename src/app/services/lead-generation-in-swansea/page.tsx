import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["swansea"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Swansea | TML Agency",
  description: "TML offers expert lead generation services in Swansea. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation swansea", "lead generation agency swansea", "lead generation company swansea"],
};

export default function LeadGenerationInSwanseaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
