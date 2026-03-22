import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["southampton"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Southampton | TML Agency",
  description: "TML offers expert website development services in Southampton. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development southampton", "website development agency southampton", "website development company southampton"],
};

export default function WebsiteDevelopmentInSouthamptonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
