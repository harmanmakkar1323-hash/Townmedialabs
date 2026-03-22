import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["las_vegas"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Las Vegas | TML Agency",
  description: "TML offers expert website development services in Las Vegas. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["website development las vegas", "website development agency las vegas", "website development company las vegas"],
};

export default function WebsiteDevelopmentInLasVegasPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
