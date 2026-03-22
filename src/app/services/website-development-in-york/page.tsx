import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["york"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in York | TML Agency",
  description: "TML offers expert website development services in York. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development york", "website development agency york", "website development company york"],
};

export default function WebsiteDevelopmentInYorkPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
