import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ambala"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Ambala | TML Agency",
  description: "TML offers expert website development services in Ambala. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["website development ambala", "website development agency ambala", "website development company ambala"],
};

export default function WebsitedevelopmentInAmbalaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
