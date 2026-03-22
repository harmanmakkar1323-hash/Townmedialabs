import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["umm_al_quwain"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Umm Al Quwain | TML Agency",
  description: "TML offers expert branding services in Umm Al Quwain. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["branding umm al quwain", "branding agency umm al quwain", "branding company umm al quwain"],
};

export default function BrandingInUmmAlQuwainPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
