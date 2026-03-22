import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["derabassi"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Derabassi | TML Agency",
  description: "TML offers expert lead generation services in Derabassi. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["lead generation derabassi", "lead generation agency derabassi", "lead generation company derabassi"],
};

export default function LeadgenerationInDerabassiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
