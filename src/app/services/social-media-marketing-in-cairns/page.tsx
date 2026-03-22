import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["cairns"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Cairns | TML Agency",
  description: "TML offers expert social media marketing services in Cairns. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["social media marketing cairns", "social media marketing agency cairns", "social media marketing company cairns"],
};

export default function SocialMediaInCairnsPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
