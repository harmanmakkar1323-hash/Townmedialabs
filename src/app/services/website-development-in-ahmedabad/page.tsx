import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ahmedabad"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Ahmedabad | TML Agency",
  description: "TML offers expert website development services in Ahmedabad. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development ahmedabad", "website development agency ahmedabad", "website development company ahmedabad"],
};

export default function WebsitedevelopmentInAhmedabadPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
