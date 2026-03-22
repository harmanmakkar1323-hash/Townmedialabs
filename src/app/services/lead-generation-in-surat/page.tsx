import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["surat"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Surat | TML Agency",
  description: "TML offers expert lead generation services in Surat. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["lead generation surat", "lead generation agency surat", "lead generation company surat"],
};

export default function LeadgenerationInSuratPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
