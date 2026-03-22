import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["brighton"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Brighton | TML Agency",
  description: "TML offers expert social media marketing services in Brighton. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing brighton", "social media marketing agency brighton", "social media marketing company brighton"],
};

export default function SocialMediaInBrightonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
