import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ras_al_khaimah"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Ras Al Khaimah | TML Agency",
  description: "TML offers expert branding services in Ras Al Khaimah. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["branding ras al khaimah", "branding agency ras al khaimah", "branding company ras al khaimah"],
};

export default function BrandingInRasAlKhaimahPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
