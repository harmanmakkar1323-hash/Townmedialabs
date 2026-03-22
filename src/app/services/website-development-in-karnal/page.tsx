import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["karnal"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Karnal | TML Agency",
  description: "TML offers expert website development services in Karnal. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["website development karnal", "website development agency karnal", "website development company karnal"],
};

export default function WebsitedevelopmentInKarnalPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
