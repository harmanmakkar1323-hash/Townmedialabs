import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ras_al_khaimah"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Ras Al Khaimah | TML Agency",
  description: "TML offers expert seo services in Ras Al Khaimah. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo ras al khaimah", "seo agency ras al khaimah", "seo company ras al khaimah"],
};

export default function SeoInRasAlKhaimahPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
