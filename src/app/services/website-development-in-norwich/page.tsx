import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["norwich"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Norwich | TML Agency",
  description: "TML offers expert website development services in Norwich. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["website development norwich", "website development agency norwich", "website development company norwich"],
};

export default function WebsiteDevelopmentInNorwichPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
