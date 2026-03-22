import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["wollongong"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Wollongong | TML Agency",
  description: "TML offers expert lead generation services in Wollongong. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation wollongong", "lead generation agency wollongong", "lead generation company wollongong"],
};

export default function LeadGenerationInWollongongPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
