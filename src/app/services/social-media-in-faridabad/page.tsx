import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["faridabad"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Faridabad | TML Agency",
  description: "TML offers expert social media marketing services in Faridabad. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["social media marketing faridabad", "social media marketing agency faridabad", "social media marketing company faridabad"],
};

export default function SocialmediaInFaridabadPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
