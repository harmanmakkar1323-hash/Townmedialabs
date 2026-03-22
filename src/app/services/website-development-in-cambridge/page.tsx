import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["cambridge"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Cambridge | TML Agency",
  description: "TML offers expert website development services in Cambridge. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["website development cambridge", "website development agency cambridge", "website development company cambridge"],
};

export default function WebsiteDevelopmentInCambridgePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
