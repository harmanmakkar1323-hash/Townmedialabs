import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["glasgow"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Glasgow | TML Agency",
  description: "TML offers expert website development services in Glasgow. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development glasgow", "website development agency glasgow", "website development company glasgow"],
};

export default function WebsiteDevelopmentInGlasgowPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
