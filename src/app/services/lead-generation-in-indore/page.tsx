import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["indore"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Indore | TML Agency",
  description: "TML offers expert lead generation services in Indore. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation indore", "lead generation agency indore", "lead generation company indore"],
};

export default function LeadgenerationInIndorePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
