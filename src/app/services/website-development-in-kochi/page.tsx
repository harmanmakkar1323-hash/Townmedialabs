import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["kochi"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Kochi | TML Agency",
  description: "TML offers expert website development services in Kochi. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development kochi", "website development agency kochi", "website development company kochi"],
};

export default function WebsitedevelopmentInKochiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
