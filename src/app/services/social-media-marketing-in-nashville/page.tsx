import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["nashville"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Nashville | TML Agency",
  description: "TML offers expert social media marketing services in Nashville. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["social media marketing nashville", "social media marketing agency nashville", "social media marketing company nashville"],
};

export default function SocialMediaInNashvillePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
