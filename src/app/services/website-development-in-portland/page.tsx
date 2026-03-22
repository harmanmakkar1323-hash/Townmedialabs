import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["portland"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Portland | TML Agency",
  description: "TML offers expert website development services in Portland. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["website development portland", "website development agency portland", "website development company portland"],
};

export default function WebsiteDevelopmentInPortlandPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
