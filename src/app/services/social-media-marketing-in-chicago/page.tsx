import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["chicago"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Chicago | TML Agency",
  description: "TML offers expert social media marketing services in Chicago. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["social media marketing chicago", "social media marketing agency chicago", "social media marketing company chicago"],
};

export default function SocialMediaInChicagoPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
