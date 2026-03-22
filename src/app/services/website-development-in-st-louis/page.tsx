import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["st_louis"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in St. Louis | TML Agency",
  description: "TML offers expert website development services in St. Louis. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development st. louis", "website development agency st. louis", "website development company st. louis"],
};

export default function WebsiteDevelopmentInStLouisPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
