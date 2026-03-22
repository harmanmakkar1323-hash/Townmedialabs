import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["kansas_city"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Kansas City | TML Agency",
  description: "TML offers expert website development services in Kansas City. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["website development kansas city", "website development agency kansas city", "website development company kansas city"],
};

export default function WebsiteDevelopmentInKansasCityPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
