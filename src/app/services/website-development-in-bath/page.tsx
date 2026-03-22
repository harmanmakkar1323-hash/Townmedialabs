import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["bath"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Bath | TML Agency",
  description: "TML offers expert website development services in Bath. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["website development bath", "website development agency bath", "website development company bath"],
};

export default function WebsiteDevelopmentInBathPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
