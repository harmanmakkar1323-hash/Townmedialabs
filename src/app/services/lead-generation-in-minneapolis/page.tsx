import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["minneapolis"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Minneapolis | TML Agency",
  description: "TML offers expert lead generation services in Minneapolis. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation minneapolis", "lead generation agency minneapolis", "lead generation company minneapolis"],
};

export default function LeadGenerationInMinneapolisPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
