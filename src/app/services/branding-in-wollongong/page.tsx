import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["wollongong"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Wollongong | TML Agency",
  description: "TML offers expert branding services in Wollongong. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding wollongong", "branding agency wollongong", "branding company wollongong"],
};

export default function BrandingInWollongongPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
