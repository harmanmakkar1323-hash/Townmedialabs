import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["wellington"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Wellington | TML Agency",
  description: "TML offers expert website development services in Wellington, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["website development wellington", "website development agency wellington", "website development wellington nz"],
};

export default function WebsiteDevelopmentInWellingtonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
