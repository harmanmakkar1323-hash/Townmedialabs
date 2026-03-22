import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["noida"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Noida | TML Agency",
  description: "TML offers expert website development services in Noida. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development noida", "website development agency noida", "website development company noida"],
};

export default function WebsitedevelopmentInNoidaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
