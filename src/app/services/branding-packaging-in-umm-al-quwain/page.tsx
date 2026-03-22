import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["umm_al_quwain"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Umm Al Quwain | TML Agency",
  description: "TML offers expert packaging design services in Umm Al Quwain. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design umm al quwain", "packaging design agency umm al quwain", "packaging design company umm al quwain"],
};

export default function BrandingPackagingInUmmAlQuwainPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
