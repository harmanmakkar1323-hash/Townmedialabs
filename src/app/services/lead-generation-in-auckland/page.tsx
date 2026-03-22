import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["auckland"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Auckland | TML Agency",
  description: "TML offers expert lead generation services in Auckland. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation auckland", "lead generation agency auckland", "lead generation company auckland"],
};

export default function LeadGenerationInAucklandPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
