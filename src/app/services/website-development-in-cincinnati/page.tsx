import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["cincinnati"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Cincinnati | TML Agency",
  description: "TML offers expert website development services in Cincinnati. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["website development cincinnati", "website development agency cincinnati", "website development company cincinnati"],
};

export default function WebsiteDevelopmentInCincinnatiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
