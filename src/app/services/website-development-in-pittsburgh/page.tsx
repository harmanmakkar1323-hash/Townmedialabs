import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["pittsburgh"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Pittsburgh | TML Agency",
  description: "TML offers expert website development services in Pittsburgh. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development pittsburgh", "website development agency pittsburgh", "website development company pittsburgh"],
};

export default function WebsiteDevelopmentInPittsburghPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
