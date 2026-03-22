import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["glasgow"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Glasgow | TML Agency",
  description: "TML offers expert social media marketing services in Glasgow. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["social media marketing glasgow", "social media marketing agency glasgow", "social media marketing company glasgow"],
};

export default function SocialMediaInGlasgowPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
