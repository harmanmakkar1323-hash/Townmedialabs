import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["wollongong"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Wollongong | TML Agency",
  description: "TML offers expert seo services in Wollongong. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo wollongong", "seo agency wollongong", "seo company wollongong"],
};

export default function SeoInWollongongPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
