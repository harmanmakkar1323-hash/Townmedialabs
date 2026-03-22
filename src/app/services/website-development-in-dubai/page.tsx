import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["dubai"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Dubai | TML Agency",
  description: "TML offers expert website development services in Dubai. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["website development dubai", "website development agency dubai", "website development company dubai"],
};

export default function WebsiteDevelopmentInDubaiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
