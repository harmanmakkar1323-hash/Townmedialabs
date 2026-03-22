import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["richmond"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Richmond | TML Agency",
  description: "TML offers expert social media marketing services in Richmond. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing richmond", "social media marketing agency richmond", "social media marketing company richmond"],
};

export default function SocialMediaInRichmondPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
