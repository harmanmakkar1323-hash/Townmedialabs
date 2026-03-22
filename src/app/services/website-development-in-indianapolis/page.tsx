import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["indianapolis"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Indianapolis | TML Agency",
  description: "TML offers expert website development services in Indianapolis. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development indianapolis", "website development agency indianapolis", "website development company indianapolis"],
};

export default function WebsiteDevelopmentInIndianapolisPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
