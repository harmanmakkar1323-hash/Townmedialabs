import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["surat"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Surat | TML Agency",
  description: "TML offers expert branding services in Surat. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["branding surat", "branding agency surat", "branding company surat"],
};

export default function BrandingInSuratPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
