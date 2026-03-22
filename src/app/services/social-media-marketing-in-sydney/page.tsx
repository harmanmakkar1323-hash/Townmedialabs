import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["sydney"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Sydney | TML Agency",
  description: "TML offers expert social media marketing services in Sydney. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing sydney", "social media marketing agency sydney", "social media marketing company sydney"],
};

export default function SocialMediaInSydneyPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
