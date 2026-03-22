import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["wolverhampton"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Wolverhampton | TML Agency",
  description: "TML offers expert website development services in Wolverhampton. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development wolverhampton", "website development agency wolverhampton", "website development company wolverhampton"],
};

export default function WebsiteDevelopmentInWolverhamptonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
