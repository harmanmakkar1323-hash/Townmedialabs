import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["gurgaon"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Gurgaon | TML Agency",
  description: "TML offers expert lead generation services in Gurgaon. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["lead generation gurgaon", "lead generation agency gurgaon", "lead generation company gurgaon"],
};

export default function LeadgenerationInGurgaonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
