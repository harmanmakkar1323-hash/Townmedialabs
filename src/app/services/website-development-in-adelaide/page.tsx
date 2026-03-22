import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["adelaide"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Adelaide | TML Agency",
  description: "TML offers expert website development services in Adelaide. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["website development adelaide", "website development agency adelaide", "website development company adelaide"],
};

export default function WebsiteDevelopmentInAdelaidePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
