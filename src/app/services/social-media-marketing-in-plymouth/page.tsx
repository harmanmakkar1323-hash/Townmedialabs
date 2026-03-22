import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["plymouth"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Plymouth | TML Agency",
  description: "TML offers expert social media marketing services in Plymouth. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["social media marketing plymouth", "social media marketing agency plymouth", "social media marketing company plymouth"],
};

export default function SocialMediaInPlymouthPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
