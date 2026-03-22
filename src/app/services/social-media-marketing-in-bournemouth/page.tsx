import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["bournemouth"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Bournemouth | TML Agency",
  description: "TML offers expert social media marketing services in Bournemouth. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["social media marketing bournemouth", "social media marketing agency bournemouth", "social media marketing company bournemouth"],
};

export default function SocialMediaInBournemouthPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
