import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["richmond"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Richmond | TML Agency",
  description: "TML offers expert website development services in Richmond. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development richmond", "website development agency richmond", "website development company richmond"],
};

export default function WebsiteDevelopmentInRichmondPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
