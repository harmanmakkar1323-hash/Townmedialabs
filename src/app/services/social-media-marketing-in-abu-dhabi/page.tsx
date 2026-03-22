import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["abu_dhabi"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Abu Dhabi | TML Agency",
  description: "TML offers expert social media marketing services in Abu Dhabi. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing abu dhabi", "social media marketing agency abu dhabi", "social media marketing company abu dhabi"],
};

export default function SocialMediaInAbuDhabiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
