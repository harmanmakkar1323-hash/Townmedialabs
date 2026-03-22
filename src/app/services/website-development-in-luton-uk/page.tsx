import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["luton_uk"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Luton | TML Agency",
  description: "TML offers expert website development services in Luton. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development luton", "website development agency luton", "website development company luton"],
};

export default function WebsiteDevelopmentInLutonUkPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
