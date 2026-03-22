import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["geelong"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Geelong | TML Agency",
  description: "TML offers expert lead generation services in Geelong. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation geelong", "lead generation agency geelong", "lead generation company geelong"],
};

export default function LeadGenerationInGeelongPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
