import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["oxford"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Oxford | TML Agency",
  description: "TML offers expert website development services in Oxford. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["website development oxford", "website development agency oxford", "website development company oxford"],
};

export default function WebsiteDevelopmentInOxfordPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
