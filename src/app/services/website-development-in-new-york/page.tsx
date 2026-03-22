import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["new_york"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in New York | TML Agency",
  description: "TML offers expert website development services in New York. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["website development new york", "website development agency new york", "website development company new york"],
};

export default function WebsiteDevelopmentInNewYorkPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
