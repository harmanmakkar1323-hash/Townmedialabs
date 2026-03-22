import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["edinburgh"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Edinburgh | TML Agency",
  description: "TML offers expert website development services in Edinburgh. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development edinburgh", "website development agency edinburgh", "website development company edinburgh"],
};

export default function WebsiteDevelopmentInEdinburghPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
