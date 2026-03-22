import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["jacksonville"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Jacksonville | TML Agency",
  description: "TML offers expert lead generation services in Jacksonville. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["lead generation jacksonville", "lead generation agency jacksonville", "lead generation company jacksonville"],
};

export default function LeadGenerationInJacksonvillePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
