import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["bathinda"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Bathinda | TML Agency",
  description: "TML offers expert lead generation services in Bathinda. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["lead generation bathinda", "lead generation agency bathinda", "lead generation company bathinda"],
};

export default function LeadGenerationInBathindaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
