import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["atlanta"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Atlanta | TML Agency",
  description: "TML offers expert website development services in Atlanta. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["website development atlanta", "website development agency atlanta", "website development company atlanta"],
};

export default function WebsiteDevelopmentInAtlantaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
