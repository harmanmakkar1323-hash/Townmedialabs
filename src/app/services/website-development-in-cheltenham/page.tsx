import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["cheltenham"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Cheltenham | TML Agency",
  description: "TML offers expert website development services in Cheltenham. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["website development cheltenham", "website development agency cheltenham", "website development company cheltenham"],
};

export default function WebsiteDevelopmentInCheltenhamPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
