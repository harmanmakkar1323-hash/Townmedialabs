import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["chicago"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Chicago | TML Agency",
  description: "TML offers expert website development services in Chicago. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["website development chicago", "website development agency chicago", "website development company chicago"],
};

export default function WebsiteDevelopmentInChicagoPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
