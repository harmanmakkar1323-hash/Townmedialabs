import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["geelong"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Geelong | TML Agency",
  description: "TML offers expert website development services in Geelong. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development geelong", "website development agency geelong", "website development company geelong"],
};

export default function WebsiteDevelopmentInGeelongPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
