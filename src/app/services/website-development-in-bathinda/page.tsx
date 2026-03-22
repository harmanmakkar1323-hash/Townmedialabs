import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["bathinda"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Bathinda | TML Agency",
  description: "TML offers expert website development services in Bathinda. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["website development bathinda", "website development agency bathinda", "website development company bathinda"],
};

export default function WebsiteDevelopmentInBathindaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
