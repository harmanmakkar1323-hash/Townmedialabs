import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["hyderabad"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Hyderabad | TML Agency",
  description: "TML offers expert website development services in Hyderabad. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development hyderabad", "website development agency hyderabad", "website development company hyderabad"],
};

export default function WebsitedevelopmentInHyderabadPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
