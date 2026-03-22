import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["kolkata"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Kolkata | TML Agency",
  description: "TML offers expert website development services in Kolkata. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["website development kolkata", "website development agency kolkata", "website development company kolkata"],
};

export default function WebsitedevelopmentInKolkataPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
