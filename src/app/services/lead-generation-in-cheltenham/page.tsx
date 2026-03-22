import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["cheltenham"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Cheltenham | TML Agency",
  description: "TML offers expert lead generation services in Cheltenham. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["lead generation cheltenham", "lead generation agency cheltenham", "lead generation company cheltenham"],
};

export default function LeadGenerationInCheltenhamPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
