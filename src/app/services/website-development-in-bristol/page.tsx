import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["bristol"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Bristol | TML Agency",
  description: "TML offers expert website development services in Bristol. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["website development bristol", "website development agency bristol", "website development company bristol"],
};

export default function WebsiteDevelopmentInBristolPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
