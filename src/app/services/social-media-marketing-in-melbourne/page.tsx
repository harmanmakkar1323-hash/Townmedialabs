import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["melbourne"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Melbourne | TML Agency",
  description: "TML offers expert social media marketing services in Melbourne. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["social media marketing melbourne", "social media marketing agency melbourne", "social media marketing company melbourne"],
};

export default function SocialMediaInMelbournePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
