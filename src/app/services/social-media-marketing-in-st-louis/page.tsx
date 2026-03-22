import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["st_louis"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in St. Louis | TML Agency",
  description: "TML offers expert social media marketing services in St. Louis. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing st. louis", "social media marketing agency st. louis", "social media marketing company st. louis"],
};

export default function SocialMediaInStLouisPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
