import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["salt_lake_city"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Salt Lake City | TML Agency",
  description: "TML offers expert social media marketing services in Salt Lake City. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["social media marketing salt lake city", "social media marketing agency salt lake city", "social media marketing company salt lake city"],
};

export default function SocialMediaInSaltLakeCityPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
