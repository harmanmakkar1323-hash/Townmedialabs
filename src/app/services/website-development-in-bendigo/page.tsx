import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["bendigo"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Bendigo | TML Agency",
  description: "TML offers expert website development services in Bendigo. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["website development bendigo", "website development agency bendigo", "website development company bendigo"],
};

export default function WebsiteDevelopmentInBendigoPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
