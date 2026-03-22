import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["rockhampton"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Rockhampton | TML Agency",
  description: "TML offers expert social media marketing services in Rockhampton. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["social media marketing rockhampton", "social media marketing agency rockhampton", "social media marketing company rockhampton"],
};

export default function SocialMediaInRockhamptonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
