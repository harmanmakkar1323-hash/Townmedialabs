import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["oklahoma_city"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Oklahoma City | TML Agency",
  description: "TML offers expert website development services in Oklahoma City. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["website development oklahoma city", "website development agency oklahoma city", "website development company oklahoma city"],
};

export default function WebsiteDevelopmentInOklahomaCityPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
