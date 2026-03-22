import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["philadelphia"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Philadelphia | TML Agency",
  description: "TML offers expert social media marketing services in Philadelphia. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing philadelphia", "social media marketing agency philadelphia", "social media marketing company philadelphia"],
};

export default function SocialMediaInPhiladelphiaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
