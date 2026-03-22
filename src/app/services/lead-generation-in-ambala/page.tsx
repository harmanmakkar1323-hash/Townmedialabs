import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ambala"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Ambala | TML Agency",
  description: "TML offers expert lead generation services in Ambala. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["lead generation ambala", "lead generation agency ambala", "lead generation company ambala"],
};

export default function LeadgenerationInAmbalaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
