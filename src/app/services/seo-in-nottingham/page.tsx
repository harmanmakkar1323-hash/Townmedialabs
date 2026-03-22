import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["nottingham"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Nottingham | TML Agency",
  description: "TML offers expert seo services in Nottingham. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo nottingham", "seo agency nottingham", "seo company nottingham"],
};

export default function SeoInNottinghamPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
