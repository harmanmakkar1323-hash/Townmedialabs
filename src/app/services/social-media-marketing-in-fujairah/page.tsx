import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["fujairah"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Fujairah | TML Agency",
  description: "TML offers expert social media marketing services in Fujairah. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing fujairah", "social media marketing agency fujairah", "social media marketing company fujairah"],
};

export default function SocialMediaInFujairahPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
