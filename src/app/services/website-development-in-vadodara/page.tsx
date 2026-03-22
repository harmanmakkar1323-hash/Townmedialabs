import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["vadodara"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Vadodara | TML Agency",
  description: "TML offers expert website development services in Vadodara. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["website development vadodara", "website development agency vadodara", "website development company vadodara"],
};

export default function WebsitedevelopmentInVadodaraPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
