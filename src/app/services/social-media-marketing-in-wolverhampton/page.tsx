import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["wolverhampton"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Wolverhampton | TML Agency",
  description: "TML offers expert social media marketing services in Wolverhampton. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing wolverhampton", "social media marketing agency wolverhampton", "social media marketing company wolverhampton"],
};

export default function SocialMediaInWolverhamptonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
