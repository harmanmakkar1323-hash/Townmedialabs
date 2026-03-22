import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["houston"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Houston | TML Agency",
  description: "TML offers expert website development services in Houston. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development houston", "website development agency houston", "website development company houston"],
};

export default function WebsiteDevelopmentInHoustonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
