import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["los_angeles"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Los Angeles | TML Agency",
  description: "TML offers expert social media marketing services in Los Angeles. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["social media marketing los angeles", "social media marketing agency los angeles", "social media marketing company los angeles"],
};

export default function SocialMediaInLosAngelesPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
