import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["reading"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Reading | TML Agency",
  description: "TML offers expert lead generation services in Reading. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["lead generation reading", "lead generation agency reading", "lead generation company reading"],
};

export default function LeadGenerationInReadingPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
