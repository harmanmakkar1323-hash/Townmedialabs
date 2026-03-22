import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["reading"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Reading | TML Agency",
  description: "TML offers expert website development services in Reading. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["website development reading", "website development agency reading", "website development company reading"],
};

export default function WebsiteDevelopmentInReadingPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
