import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["visakhapatnam"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Visakhapatnam | TML Agency",
  description: "TML offers expert lead generation services in Visakhapatnam. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["lead generation visakhapatnam", "lead generation agency visakhapatnam", "lead generation company visakhapatnam"],
};

export default function LeadgenerationInVisakhapatnamPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
