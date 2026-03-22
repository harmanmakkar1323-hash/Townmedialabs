import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["perth"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Perth | TML Agency",
  description: "TML offers expert website development services in Perth. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development perth", "website development agency perth", "website development company perth"],
};

export default function WebsiteDevelopmentInPerthPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
