import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["kochi"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Kochi | TML Agency",
  description: "TML offers expert lead generation services in Kochi. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation kochi", "lead generation agency kochi", "lead generation company kochi"],
};

export default function LeadgenerationInKochiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
