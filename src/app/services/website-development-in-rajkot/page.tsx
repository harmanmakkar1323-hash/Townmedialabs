import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["rajkot"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Rajkot | TML Agency",
  description: "TML offers expert website development services in Rajkot. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["website development rajkot", "website development agency rajkot", "website development company rajkot"],
};

export default function WebsitedevelopmentInRajkotPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
