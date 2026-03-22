import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["swansea"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Swansea | TML Agency",
  description: "TML offers expert website development services in Swansea. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["website development swansea", "website development agency swansea", "website development company swansea"],
};

export default function WebsiteDevelopmentInSwanseaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
