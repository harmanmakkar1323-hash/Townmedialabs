import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["liverpool"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Liverpool | TML Agency",
  description: "TML offers expert website development services in Liverpool. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development liverpool", "website development agency liverpool", "website development company liverpool"],
};

export default function WebsiteDevelopmentInLiverpoolPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
