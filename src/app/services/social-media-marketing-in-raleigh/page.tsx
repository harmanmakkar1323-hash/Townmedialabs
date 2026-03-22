import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["raleigh"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Raleigh | TML Agency",
  description: "TML offers expert social media marketing services in Raleigh. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing raleigh", "social media marketing agency raleigh", "social media marketing company raleigh"],
};

export default function SocialMediaInRaleighPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
