import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["milwaukee"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Milwaukee | TML Agency",
  description: "TML offers expert website development services in Milwaukee. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["website development milwaukee", "website development agency milwaukee", "website development company milwaukee"],
};

export default function WebsiteDevelopmentInMilwaukeePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
