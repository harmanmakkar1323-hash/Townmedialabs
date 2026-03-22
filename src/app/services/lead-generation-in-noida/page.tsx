import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["noida"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Noida | TML Agency",
  description: "TML offers expert lead generation services in Noida. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["lead generation noida", "lead generation agency noida", "lead generation company noida"],
};

export default function LeadgenerationInNoidaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
