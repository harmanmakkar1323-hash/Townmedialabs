import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["al_ain"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Al Ain | TML Agency",
  description: "TML offers expert website development services in Al Ain. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["website development al ain", "website development agency al ain", "website development company al ain"],
};

export default function WebsiteDevelopmentInAlAinPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
