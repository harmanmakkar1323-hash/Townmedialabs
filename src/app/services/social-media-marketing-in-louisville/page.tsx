import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["louisville"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Louisville | TML Agency",
  description: "TML offers expert social media marketing services in Louisville. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing louisville", "social media marketing agency louisville", "social media marketing company louisville"],
};

export default function SocialMediaInLouisvillePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
