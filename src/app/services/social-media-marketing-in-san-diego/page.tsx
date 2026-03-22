import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["san_diego"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in San Diego | TML Agency",
  description: "TML offers expert social media marketing services in San Diego. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing san diego", "social media marketing agency san diego", "social media marketing company san diego"],
};

export default function SocialMediaInSanDiegoPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
