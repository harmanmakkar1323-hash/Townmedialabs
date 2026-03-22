import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["kansas_city"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Kansas City | TML Agency",
  description: "TML offers expert social media marketing services in Kansas City. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["social media marketing kansas city", "social media marketing agency kansas city", "social media marketing company kansas city"],
};

export default function SocialMediaInKansasCityPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
