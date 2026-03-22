import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["phoenix"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Phoenix | TML Agency",
  description: "TML offers expert seo services in Phoenix. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["seo phoenix", "seo agency phoenix", "seo company phoenix"],
};

export default function SeoInPhoenixPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
