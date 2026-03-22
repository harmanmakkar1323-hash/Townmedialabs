import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["london"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in London | TML Agency",
  description: "TML offers expert lead generation services in London. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["lead generation london", "lead generation agency london", "lead generation company london"],
};

export default function LeadGenerationInLondonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
