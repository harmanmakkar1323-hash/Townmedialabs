import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["sacramento"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Sacramento | TML Agency",
  description: "TML offers expert website development services in Sacramento. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["website development sacramento", "website development agency sacramento", "website development company sacramento"],
};

export default function WebsiteDevelopmentInSacramentoPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
