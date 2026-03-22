import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["southampton"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Southampton | TML Agency",
  description: "TML offers expert social media marketing services in Southampton. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing southampton", "social media marketing agency southampton", "social media marketing company southampton"],
};

export default function SocialMediaInSouthamptonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
