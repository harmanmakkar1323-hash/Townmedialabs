import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["panchkula"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Panchkula | TML Agency",
  description: "TML offers expert website development services in Panchkula. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development panchkula", "website development agency panchkula", "website development company panchkula"],
};

export default function WebsitedevelopmentInPanchkulaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
