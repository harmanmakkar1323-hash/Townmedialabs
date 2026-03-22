import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["houston"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Houston | TML Agency",
  description: "TML offers expert social media marketing services in Houston. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["social media marketing houston", "social media marketing agency houston", "social media marketing company houston"],
};

export default function SocialMediaInHoustonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
