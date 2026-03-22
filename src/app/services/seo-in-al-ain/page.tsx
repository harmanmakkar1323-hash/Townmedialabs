import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["al_ain"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Al Ain | TML Agency",
  description: "TML offers expert seo services in Al Ain. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo al ain", "seo agency al ain", "seo company al ain"],
};

export default function SeoInAlAinPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
