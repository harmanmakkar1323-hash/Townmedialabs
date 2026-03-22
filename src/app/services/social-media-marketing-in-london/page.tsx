import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["london"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in London | TML Agency",
  description: "TML offers expert social media marketing services in London. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["social media marketing london", "social media marketing agency london", "social media marketing company london"],
};

export default function SocialMediaInLondonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
