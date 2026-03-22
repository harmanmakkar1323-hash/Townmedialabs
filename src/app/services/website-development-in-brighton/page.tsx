import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["brighton"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Brighton | TML Agency",
  description: "TML offers expert website development services in Brighton. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["website development brighton", "website development agency brighton", "website development company brighton"],
};

export default function WebsiteDevelopmentInBrightonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
