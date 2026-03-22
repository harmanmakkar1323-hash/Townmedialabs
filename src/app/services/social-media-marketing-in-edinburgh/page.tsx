import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["edinburgh"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Edinburgh | TML Agency",
  description: "TML offers expert social media marketing services in Edinburgh. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["social media marketing edinburgh", "social media marketing agency edinburgh", "social media marketing company edinburgh"],
};

export default function SocialMediaInEdinburghPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
