import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["coventry"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Coventry | TML Agency",
  description: "TML offers expert website development services in Coventry. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development coventry", "website development agency coventry", "website development company coventry"],
};

export default function WebsiteDevelopmentInCoventryPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
