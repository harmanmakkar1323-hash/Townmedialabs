import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["derabassi"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Derabassi | TML Agency",
  description: "TML offers expert website development services in Derabassi. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["website development derabassi", "website development agency derabassi", "website development company derabassi"],
};

export default function WebsitedevelopmentInDerabassiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
