import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["jacksonville"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Jacksonville | TML Agency",
  description: "TML offers expert website development services in Jacksonville. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development jacksonville", "website development agency jacksonville", "website development company jacksonville"],
};

export default function WebsiteDevelopmentInJacksonvillePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
