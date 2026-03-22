import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["cardiff"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Cardiff | TML Agency",
  description: "TML offers expert website development services in Cardiff. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["website development cardiff", "website development agency cardiff", "website development company cardiff"],
};

export default function WebsiteDevelopmentInCardiffPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
