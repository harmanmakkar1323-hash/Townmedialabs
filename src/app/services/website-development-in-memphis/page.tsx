import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["memphis"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Memphis | TML Agency",
  description: "TML offers expert website development services in Memphis. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development memphis", "website development agency memphis", "website development company memphis"],
};

export default function WebsiteDevelopmentInMemphisPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
