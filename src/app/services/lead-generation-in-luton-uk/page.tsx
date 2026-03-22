import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["luton_uk"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Luton | TML Agency",
  description: "TML offers expert lead generation services in Luton. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["lead generation luton", "lead generation agency luton", "lead generation company luton"],
};

export default function LeadGenerationInLutonUkPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
