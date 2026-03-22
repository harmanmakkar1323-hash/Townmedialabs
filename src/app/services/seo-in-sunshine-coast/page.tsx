import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["sunshine_coast"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Sunshine Coast | TML Agency",
  description: "TML offers expert seo services in Sunshine Coast. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo sunshine coast", "seo agency sunshine coast", "seo company sunshine coast"],
};

export default function SeoInSunshineCoastPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
