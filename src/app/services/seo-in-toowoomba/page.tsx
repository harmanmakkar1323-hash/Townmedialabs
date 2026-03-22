import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["toowoomba"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Toowoomba | TML Agency",
  description: "TML offers expert seo services in Toowoomba. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["seo toowoomba", "seo agency toowoomba", "seo company toowoomba"],
};

export default function SeoInToowoombaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
