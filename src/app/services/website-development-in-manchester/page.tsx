import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["manchester"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Manchester | TML Agency",
  description: "TML offers expert website development services in Manchester. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development manchester", "website development agency manchester", "website development company manchester"],
};

export default function WebsiteDevelopmentInManchesterPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
