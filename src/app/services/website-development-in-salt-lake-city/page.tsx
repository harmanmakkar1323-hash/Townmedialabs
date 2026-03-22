import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["salt_lake_city"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Salt Lake City | TML Agency",
  description: "TML offers expert website development services in Salt Lake City. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development salt lake city", "website development agency salt lake city", "website development company salt lake city"],
};

export default function WebsiteDevelopmentInSaltLakeCityPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
