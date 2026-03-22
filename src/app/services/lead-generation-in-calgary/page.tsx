import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["calgary"];

export const metadata: Metadata = {
  title: "Best Lead Generation Agency in Calgary | TML Agency",
  description: "TML offers expert lead generation services in Calgary, Alberta. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["lead generation calgary", "lead generation agency calgary"],
};

export default function Page() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
