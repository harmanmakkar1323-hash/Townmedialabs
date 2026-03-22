import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["bathinda"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Bathinda | TML Agency",
  description: "TML offers expert social media marketing services in Bathinda. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["social media marketing bathinda", "social media marketing agency bathinda", "social media marketing company bathinda"],
};

export default function SocialMediaMarketingInBathindaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
