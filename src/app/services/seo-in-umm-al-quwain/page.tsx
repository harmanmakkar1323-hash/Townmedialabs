import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["umm_al_quwain"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Umm Al Quwain | TML Agency",
  description: "TML offers expert seo services in Umm Al Quwain. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo umm al quwain", "seo agency umm al quwain", "seo company umm al quwain"],
};

export default function SeoInUmmAlQuwainPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
