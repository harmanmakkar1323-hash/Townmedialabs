import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["canberra"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Canberra | TML Agency",
  description: "TML offers expert lead generation services in Canberra. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation canberra", "lead generation agency canberra", "lead generation company canberra"],
};

export default function LeadGenerationInCanberraPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
