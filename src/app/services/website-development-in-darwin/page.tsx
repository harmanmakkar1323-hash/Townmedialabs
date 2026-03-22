import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["darwin"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Darwin | TML Agency",
  description: "TML offers expert website development services in Darwin. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["website development darwin", "website development agency darwin", "website development company darwin"],
};

export default function WebsiteDevelopmentInDarwinPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
