import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["philadelphia"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Philadelphia | TML Agency",
  description: "TML offers expert website development services in Philadelphia. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["website development philadelphia", "website development agency philadelphia", "website development company philadelphia"],
};

export default function WebsiteDevelopmentInPhiladelphiaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
