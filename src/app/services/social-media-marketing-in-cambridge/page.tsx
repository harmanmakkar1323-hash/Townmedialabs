import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["cambridge"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Cambridge | TML Agency",
  description: "TML offers expert social media marketing services in Cambridge. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["social media marketing cambridge", "social media marketing agency cambridge", "social media marketing company cambridge"],
};

export default function SocialMediaInCambridgePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
