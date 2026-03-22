import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["patiala"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Patiala | TML Agency",
  description: "TML offers expert website development services in Patiala. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["website development patiala", "website development agency patiala", "website development company patiala"],
};

export default function WebsitedevelopmentInPatialaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
