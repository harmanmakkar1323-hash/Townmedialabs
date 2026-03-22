import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["cleveland"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Cleveland | TML Agency",
  description: "TML offers expert website development services in Cleveland. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development cleveland", "website development agency cleveland", "website development company cleveland"],
};

export default function WebsiteDevelopmentInClevelandPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
