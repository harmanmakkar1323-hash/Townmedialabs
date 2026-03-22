import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["atlanta"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Atlanta | TML Agency",
  description: "TML offers expert social media marketing services in Atlanta. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing atlanta", "social media marketing agency atlanta", "social media marketing company atlanta"],
};

export default function SocialMediaInAtlantaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
