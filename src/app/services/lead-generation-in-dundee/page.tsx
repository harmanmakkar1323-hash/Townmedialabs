import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["dundee"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Dundee | TML Agency",
  description: "TML offers expert lead generation services in Dundee. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["lead generation dundee", "lead generation agency dundee", "lead generation company dundee"],
};

export default function LeadGenerationInDundeePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
