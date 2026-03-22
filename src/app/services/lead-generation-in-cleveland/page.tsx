import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["cleveland"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Cleveland | TML Agency",
  description: "TML offers expert lead generation services in Cleveland. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation cleveland", "lead generation agency cleveland", "lead generation company cleveland"],
};

export default function LeadGenerationInClevelandPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
