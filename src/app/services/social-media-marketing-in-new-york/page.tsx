import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["new_york"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in New York | TML Agency",
  description: "TML offers expert social media marketing services in New York. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["social media marketing new york", "social media marketing agency new york", "social media marketing company new york"],
};

export default function SocialMediaInNewYorkPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
