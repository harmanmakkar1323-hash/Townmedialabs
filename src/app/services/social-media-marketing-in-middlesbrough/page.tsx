import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["middlesbrough"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Middlesbrough | TML Agency",
  description: "TML offers expert social media marketing services in Middlesbrough. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing middlesbrough", "social media marketing agency middlesbrough", "social media marketing company middlesbrough"],
};

export default function SocialMediaInMiddlesbroughPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
