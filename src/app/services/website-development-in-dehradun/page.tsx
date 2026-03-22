import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["dehradun"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Dehradun | TML Agency",
  description: "TML offers expert website development services in Dehradun. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["website development dehradun", "website development agency dehradun", "website development company dehradun"],
};

export default function WebsitedevelopmentInDehradunPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
