import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["umm_al_quwain"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Umm Al Quwain | TML Agency",
  description: "TML offers expert lead generation services in Umm Al Quwain. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation umm al quwain", "lead generation agency umm al quwain", "lead generation company umm al quwain"],
};

export default function LeadGenerationInUmmAlQuwainPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
