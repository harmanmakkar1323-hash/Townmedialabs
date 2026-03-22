import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["liverpool"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Liverpool | TML Agency",
  description: "TML offers expert social media marketing services in Liverpool. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["social media marketing liverpool", "social media marketing agency liverpool", "social media marketing company liverpool"],
};

export default function SocialMediaInLiverpoolPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
