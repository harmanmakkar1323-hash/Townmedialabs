import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["geelong"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Geelong | TML Agency",
  description: "TML offers expert seo services in Geelong. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["seo geelong", "seo agency geelong", "seo company geelong"],
};

export default function SeoInGeelongPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
