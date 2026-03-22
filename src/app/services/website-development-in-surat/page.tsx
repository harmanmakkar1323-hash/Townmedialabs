import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["surat"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Surat | TML Agency",
  description: "TML offers expert website development services in Surat. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development surat", "website development agency surat", "website development company surat"],
};

export default function WebsitedevelopmentInSuratPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
