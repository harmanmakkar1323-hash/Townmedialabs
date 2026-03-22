import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["preston"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Preston | TML Agency",
  description: "TML offers expert lead generation services in Preston. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["lead generation preston", "lead generation agency preston", "lead generation company preston"],
};

export default function LeadGenerationInPrestonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
