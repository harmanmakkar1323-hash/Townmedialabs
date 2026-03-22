import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["indore"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Indore | TML Agency",
  description: "TML offers expert website development services in Indore. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["website development indore", "website development agency indore", "website development company indore"],
};

export default function WebsitedevelopmentInIndorePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
