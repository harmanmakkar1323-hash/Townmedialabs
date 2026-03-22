import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["phoenix"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Phoenix | TML Agency",
  description: "TML offers expert lead generation services in Phoenix. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["lead generation phoenix", "lead generation agency phoenix", "lead generation company phoenix"],
};

export default function LeadGenerationInPhoenixPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
