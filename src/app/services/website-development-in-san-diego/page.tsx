import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["san_diego"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in San Diego | TML Agency",
  description: "TML offers expert website development services in San Diego. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["website development san diego", "website development agency san diego", "website development company san diego"],
};

export default function WebsiteDevelopmentInSanDiegoPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
