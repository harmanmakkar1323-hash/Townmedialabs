import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["derabassi"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Derabassi | TML Agency",
  description: "TML offers expert branding services in Derabassi. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["branding derabassi", "branding agency derabassi", "branding company derabassi"],
};

export default function BrandingInDerabassiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
