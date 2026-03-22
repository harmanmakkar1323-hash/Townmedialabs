import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["hobart"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Hobart | TML Agency",
  description: "TML offers expert website development services in Hobart. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development hobart", "website development agency hobart", "website development company hobart"],
};

export default function WebsiteDevelopmentInHobartPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
