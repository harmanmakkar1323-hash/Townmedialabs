import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["coimbatore"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Coimbatore | TML Agency",
  description: "TML offers expert website development services in Coimbatore. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["website development coimbatore", "website development agency coimbatore", "website development company coimbatore"],
};

export default function WebsitedevelopmentInCoimbatorePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
