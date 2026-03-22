import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["los_angeles"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Los Angeles | TML Agency",
  description: "TML offers expert website development services in Los Angeles. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["website development los angeles", "website development agency los angeles", "website development company los angeles"],
};

export default function WebsiteDevelopmentInLosAngelesPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
