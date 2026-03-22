import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["derabassi"];

export const metadata: Metadata = {
  title: "Best Branding & Packaging Agency in Derabassi | TML Agency",
  description: "TML offers expert branding and packaging services in Derabassi. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["branding and packaging derabassi", "branding and packaging agency derabassi", "branding and packaging company derabassi"],
};

export default function BrandingpackagingInDerabassiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Branding & Packaging"
    />
  );
}
