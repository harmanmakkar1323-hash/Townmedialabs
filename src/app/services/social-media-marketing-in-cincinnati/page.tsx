import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["cincinnati"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Cincinnati | TML Agency",
  description: "TML offers expert social media marketing services in Cincinnati. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["social media marketing cincinnati", "social media marketing agency cincinnati", "social media marketing company cincinnati"],
};

export default function SocialMediaInCincinnatiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
