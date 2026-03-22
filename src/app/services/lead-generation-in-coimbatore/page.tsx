import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["coimbatore"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Coimbatore | TML Agency",
  description: "TML offers expert lead generation services in Coimbatore. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation coimbatore", "lead generation agency coimbatore", "lead generation company coimbatore"],
};

export default function LeadgenerationInCoimbatorePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
