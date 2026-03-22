import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["sacramento"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Sacramento | TML Agency",
  description: "TML offers expert social media marketing services in Sacramento. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing sacramento", "social media marketing agency sacramento", "social media marketing company sacramento"],
};

export default function SocialMediaInSacramentoPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
